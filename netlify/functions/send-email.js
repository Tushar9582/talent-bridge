import "dotenv/config";
import Busboy from "busboy";
import nodemailer from "nodemailer";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;
const MAX_FIELD_LENGTH = 4000;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_RESUME_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);

class RequestError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

const response = (statusCode, message) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message }),
});

function cleanText(value, fieldName, required = true) {
  if (typeof value !== "string") {
    if (required) throw new RequestError(`${fieldName} is required.`);
    return "";
  }
  const cleaned = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
  if (required && !cleaned) throw new RequestError(`${fieldName} is required.`);
  if (cleaned.length > MAX_FIELD_LENGTH) {
    throw new RequestError(`${fieldName} is too long.`);
  }
  return cleaned;
}

function validateCommonFields(fields) {
  const name = cleanText(fields.name, "Name");
  const email = cleanText(fields.email, "Email");
  const phone = cleanText(fields.phone, "Phone");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new RequestError("Please enter a valid email address.");
  }
  if (!/^[0-9+()\s.-]{7,25}$/.test(phone)) {
    throw new RequestError("Please enter a valid phone number.");
  }
  return { name, email, phone };
}

function parseJsonBody(event) {
  try {
    const body = event.isBase64Encoded
      ? Buffer.from(event.body || "", "base64").toString("utf8")
      : event.body || "{}";
    return JSON.parse(body);
  } catch {
    throw new RequestError("Invalid JSON request body.");
  }
}

function parseMultipartBody(event, contentType) {
  return new Promise((resolve, reject) => {
    const fields = {};
    let resume;
    let rejected = false;
    let settled = false;
    const fail = (error) => {
      if (!rejected && !settled) {
        rejected = true;
        reject(error);
      }
    };

    let parser;
    try {
      parser = Busboy({
        headers: { "content-type": contentType },
        limits: {
          fileSize: MAX_RESUME_SIZE,
          fieldSize: MAX_FIELD_LENGTH,
          files: 1,
          fields: 20,
        },
      });
    } catch {
      fail(new RequestError("Invalid multipart request."));
      return;
    }

    parser.on("field", (name, value) => {
      fields[name] = value;
    });
    parser.on("file", (name, file, info) => {
      if (name !== "resume") {
        file.resume();
        fail(new RequestError("Unexpected file field."));
        return;
      }
      const chunks = [];
      let size = 0;
      file.on("data", (chunk) => {
        size += chunk.length;
        chunks.push(chunk);
      });
      file.on("limit", () => fail(new RequestError("Your resume must be 5 MB or smaller.", 413)));
      file.on("end", () => {
        if (!rejected) resume = { ...info, size, content: Buffer.concat(chunks) };
      });
    });
    parser.on("error", () => fail(new RequestError("Invalid multipart request.")));
    parser.on("finish", () => {
      if (!rejected && !settled) {
        settled = true;
        resolve({ fields, resume });
      }
    });

    const body = Buffer.from(
      event.body || "",
      event.isBase64Encoded ? "base64" : "utf8",
    );
    parser.end(body);
  });
}

function validateResume(resume) {
  if (!resume || !resume.filename || resume.size === 0) {
    throw new RequestError("Please attach your resume before submitting.");
  }
  if (resume.size > MAX_RESUME_SIZE) {
    throw new RequestError("Your resume must be 5 MB or smaller.", 413);
  }
  const extension = resume.filename.toLowerCase().slice(resume.filename.lastIndexOf("."));
  if (!ALLOWED_RESUME_EXTENSIONS.has(extension) || !ALLOWED_RESUME_TYPES.has(resume.mimeType)) {
    throw new RequestError("Please upload your resume as a PDF, DOC, or DOCX file.");
  }
  if (extension === ".pdf" && !resume.content.subarray(0, 5).equals(Buffer.from("%PDF-"))) {
    throw new RequestError("The uploaded PDF file is invalid.");
  }
  if ((extension === ".doc" || extension === ".docx") && !resume.content.subarray(0, 2).equals(Buffer.from("PK")) && extension === ".docx") {
    throw new RequestError("The uploaded DOCX file is invalid.");
  }
}

function createTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
    throw new Error("Email configuration is incomplete.");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
}

export async function handler(event) {
  if (event.httpMethod !== "POST") return response(405, "Method not allowed.");

  try {
    const headers = Object.fromEntries(
      Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value]),
    );
    const contentType = headers["content-type"] || "";
    const isMultipart = contentType.toLowerCase().startsWith("multipart/form-data");
    const parsed = isMultipart
      ? await parseMultipartBody(event, contentType)
      : { fields: parseJsonBody(event) };
    const formType = cleanText(parsed.fields.formType, "Form type");
    if (formType !== "contact" && formType !== "career") {
      throw new RequestError("Invalid form type.");
    }

    const common = validateCommonFields(parsed.fields);
    const transporter = createTransporter();
    const from = process.env.EMAIL_USER;
    const to = process.env.EMAIL_TO;

    if (formType === "contact") {
      if (isMultipart) throw new RequestError("Contact submissions must use JSON.");
      const company = cleanText(parsed.fields.company, "Company");
      const message = cleanText(parsed.fields.message, "Message");
      await transporter.sendMail({
        from,
        to,
        replyTo: common.email,
        subject: "New Contact Enquiry - Skillmint Global",
        text: `A new contact enquiry has been received.\n\nName: ${common.name}\nEmail: ${common.email}\nPhone: ${common.phone}\nCompany: ${company}\nMessage: ${message}`,
      });
    } else {
      if (!isMultipart) throw new RequestError("Career submissions must use multipart form data.");
      const position = cleanText(parsed.fields.position, "Position applying for");
      const industry = cleanText(parsed.fields.industry, "Industry");
      const experience = cleanText(parsed.fields.experience, "Years of experience");
      const message = cleanText(parsed.fields.message, "Message", false);
      validateResume(parsed.resume);

      await transporter.sendMail({
        from,
        to,
        replyTo: common.email,
        subject: `New Job Application - ${position} - Skillmint Global`,
        text: `A new job application has been received.\n\nName: ${common.name}\nEmail: ${common.email}\nPhone: ${common.phone}\nPosition Applying For: ${position}\nIndustry: ${industry}\nYears of Experience: ${experience}\n\nMessage:\n${message}\n\nThe applicant's resume is attached to this email.`,
        attachments: [{
          filename: parsed.resume.filename.replace(/[^a-zA-Z0-9._-]/g, "-"),
          content: parsed.resume.content,
          contentType: parsed.resume.mimeType,
        }],
      });
    }

    return response(200, "Your message was sent successfully.");
  } catch (error) {
    if (error instanceof RequestError) return response(error.statusCode, error.message);
    if (error instanceof Error && error.message === "Timeout") {
      return response(
        504,
        "Email delivery timed out while attaching the resume. Please try a smaller file or try again.",
      );
    }
    console.error("Email delivery failed", error instanceof Error ? error.message : "Unknown error");
    return response(500, "We couldn't send your message. Please try again later.");
  }
}
