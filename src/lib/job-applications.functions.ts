import { createServerFn } from "@tanstack/react-start";

const MAX_RESUME_SIZE = 10 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function readText(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function getResume(formData: FormData): File {
  const value = formData.get("resume");
  if (!(value instanceof File) || value.size === 0) {
    throw new Error("Please attach your resume before submitting.");
  }
  if (value.size > MAX_RESUME_SIZE) {
    throw new Error("Your resume must be smaller than 10 MB.");
  }
  if (!ALLOWED_RESUME_TYPES.has(value.type)) {
    throw new Error("Please upload your resume as a PDF, DOC, or DOCX file.");
  }
  return value;
}

export const createJobApplication = createServerFn({ method: "POST" })
  .inputValidator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error("Invalid application submission.");
    }
    return data;
  })
  .handler(async ({ data }) => {
    const name = readText(data, "name");
    const email = readText(data, "email");
    const phone = readText(data, "phone");
    const position = readText(data, "position");
    const industry = readText(data, "industry");
    const experience = readText(data, "experience");
    const message = readText(data, "message");
    const resume = getResume(data);

    if (!name || !email || !phone || !position || !industry || !experience) {
      throw new Error("Please complete all required fields.");
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      throw new Error("Please enter a valid email address.");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const safeName = resume.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const storagePath = `applications/${crypto.randomUUID()}-${safeName}`;
    const { error: uploadError } = await supabaseAdmin.storage
      .from("job-resumes")
      .upload(storagePath, resume, { contentType: resume.type, upsert: false });

    if (uploadError) {
      console.error("Resume upload failed", uploadError);
      throw new Error("We couldn't save your resume. Please try again.");
    }

    const { data: signedFile, error: signedUrlError } = await supabaseAdmin.storage
      .from("job-resumes")
      .createSignedUrl(storagePath, 60 * 60 * 24 * 7);

    if (signedUrlError || !signedFile?.signedUrl) {
      await supabaseAdmin.storage.from("job-resumes").remove([storagePath]);
      console.error("Resume link creation failed", signedUrlError);
      throw new Error("We couldn't prepare your resume. Please try again.");
    }

    const { error: insertError } = await supabaseAdmin.from("job_applications").insert({
      name,
      email,
      phone,
      position,
      industry,
      experience,
      message: message || null,
      resume_file_url: signedFile.signedUrl,
      resume_storage_path: storagePath,
    });

    if (insertError) {
      await supabaseAdmin.storage.from("job-resumes").remove([storagePath]);
      console.error("Application save failed", insertError);
      throw new Error("We couldn't submit your application. Please try again.");
    }

    return { ok: true };
  });