import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/site-shell";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Skill Mint Solutions" },
      {
        name: "description",
        content:
          "Share your experience with Skill Mint Solutions and explore suitable career opportunities.",
      },
      { property: "og:title", content: "Careers | Skill Mint Solutions" },
      {
        property: "og:description",
        content: "Your next opportunity may start with a simple application.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resumeName, setResumeName] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setError("Please attach your resume before submitting.");
      return;
    }
    if (resume.size > MAX_RESUME_SIZE) {
      setError("Your resume must be 5 MB or smaller.");
      return;
    }
    if (
      !formData
        .get("email")
        ?.toString()
        .match(/^\S+@\S+\.\S+$/)
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      formData.set("formType", "career");
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const responseBody = await response.text();
        let result: { message?: string } = {};
        try {
          result = JSON.parse(responseBody) as { message?: string };
        } catch {
          throw new Error("The email service returned an invalid error response.");
        }
        throw new Error(result.message || "Failed to submit application.");
      }
      setSent(true);
      form.reset();
      setResumeName("");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't submit your application. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageBanner
        eyebrow="Apply for a job"
        title="Your next opportunity may start here."
        description="Share a little about yourself. Our placement team will review your profile and reach out when the right role comes up."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="eyebrow text-teal">A clearer next step</p>
          <h2 className="mt-3 font-display text-3xl font-bold">
            Good work deserves a good process.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We keep you informed, help prepare your documents, and stay close through every stage of
            the journey.
          </p>
          <div className="mt-8 space-y-5 border-l border-primary/40 pl-5 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">01 · Review</strong>
              <br />
              We get to know your experience and ambitions.
            </p>
            <p>
              <strong className="text-foreground">02 · Match</strong>
              <br />
              We connect your skills with suitable opportunities.
            </p>
            <p>
              <strong className="text-foreground">03 · Support</strong>
              <br />
              We guide you through interviews and documentation.
            </p>
          </div>
        </div>
        {sent ? (
          <div className="glass-panel rounded-2xl p-7 sm:p-9">
            <p className="eyebrow text-teal">Application received</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Thank you for applying.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our recruitment team will review your profile and contact you if your experience
              matches a suitable opportunity.
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Questions? Email{" "}
              <a
                href="mailto:hr@skillmintglobal.com"
                className="font-semibold text-primary underline"
              >
                hr@skillmintglobal.com
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="glass-panel rounded-2xl p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" required />
              <Field label="Position applying for" name="position" required />
              <Field label="Industry" name="industry" required />
              <Field label="Years of experience" name="experience" required />
            </div>
            <label className="mt-5 block text-sm text-muted-foreground">
              Resume upload
              <div className="mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input bg-background/50 px-4 py-4 transition hover:border-primary">
                <UploadCloud className="size-5 text-primary" />
                <span className="min-w-0 truncate text-sm">
                  {resumeName || "Choose a PDF or DOCX file"}
                </span>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="sr-only"
                  onChange={(event) => setResumeName(event.target.files?.[0]?.name ?? "")}
                />
              </div>
            </label>
            <label className="mt-5 block text-sm text-muted-foreground">
              Message
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-lg border border-input bg-background/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            {error && (
              <p role="alert" className="mt-5 text-sm text-destructive">
                {error}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={submitting} className="rounded-full px-6">
                {submitting ? "Submitting application…" : "Submit application"}
              </Button>
              <span className="text-xs text-muted-foreground">PDF, DOC, or DOCX · Max 5 MB</span>
            </div>
          </form>
        )}
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm text-muted-foreground">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 h-11 w-full rounded-lg border border-input bg-background/50 px-4 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
