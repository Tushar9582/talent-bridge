CREATE TABLE public.job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  industry TEXT NOT NULL,
  experience TEXT NOT NULL,
  message TEXT,
  resume_file_url TEXT,
  resume_storage_path TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.job_applications TO anon;
GRANT ALL ON public.job_applications TO service_role;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a job application"
  ON public.job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);