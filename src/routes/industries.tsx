import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, HeartPulse, Landmark, Monitor, ShieldCheck, Warehouse } from "lucide-react";

import { PageBanner, PrimaryLink, SectionIntro } from "@/components/site-shell";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Skillmint" },
      {
        name: "description",
        content:
          "Explore the sectors Skillmint supports with tailored recruitment, workforce planning, and hiring strategies for business growth.",
      },
      { property: "og:title", content: "Industries We Serve | Skillmint" },
      {
        property: "og:description",
        content:
          "Industry-focused hiring support for banking, IT, manufacturing, healthcare, and other growing sectors.",
      },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Landmark,
    title: "BFSI",
    description:
      "End-to-end hiring support for banking, financial services, insurance, and allied operations teams.",
  },
  {
    icon: Monitor,
    title: "IT",
    description:
      "Talent acquisition for software, digital transformation, support, and technical operations roles.",
  },
  {
    icon: Building2,
    title: "BPO/KPO",
    description:
      "Scalable recruitment for customer operations, process excellence, analytics, and service delivery teams.",
  },
  {
    icon: Warehouse,
    title: "Manufacturing",
    description:
      "Workforce solutions for plant operations, quality, production support, and supervisory roles.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Pharmaceuticals",
    description:
      "Hiring support across healthcare delivery, pharma operations, support teams, and regulated environments.",
  },
  {
    icon: ShieldCheck,
    title: "Telecom",
    description:
      "Recruitment support for service operations, network support, customer engagement, and field teams.",
  },
  {
    icon: Building2,
    title: "FMCG",
    description:
      "Flexible staffing for sales, distribution, retail support, and high-volume operational teams.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Hiring support for property operations, sales, support services, and project-related roles.",
  },
  {
    icon: Building2,
    title: "Education",
    description:
      "Talent solutions for academic operations, administration, sales, and service-based support teams.",
  },
  {
    icon: Building2,
    title: "Logistics",
    description:
      "Workforce planning for warehouse operations, transport coordination, and supply chain support.",
  },
  {
    icon: Building2,
    title: "Retail & E-commerce",
    description:
      "Recruitment support for store operations, customer service, merchandising, and e-commerce execution.",
  },
  {
    icon: Building2,
    title: "Automobile",
    description:
      "Skilled hiring for production support, service operations, sales, and support functions across the auto sector.",
  },
];

function IndustriesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Industries we serve"
        title="Sector expertise built around the way you hire."
        description="We work across high-growth industries to help businesses scale with the right people, faster decisions, and practical workforce planning."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionIntro
          eyebrow="Where we add value"
          title="Custom recruitment for the industries shaping tomorrow"
          description="Every sector has different hiring pressure points. Our approach is grounded in the realities of each business, from role complexity to delivery timelines and team culture."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass-panel rounded-2xl p-7 transition-transform hover:-translate-y-1"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-secondary/12 text-primary">
                <Icon className="size-5" />
              </span>

              <h2 className="mt-6 font-display text-2xl font-bold">{title}</h2>

              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>

              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Discuss hiring needs <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-accent/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionIntro
            eyebrow="Why businesses choose us"
            title="Hiring support shaped by industry understanding"
            description="From fast-moving finance teams to operational manufacturing environments, we match talent to the realities of your work and your pace."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Role-specific sourcing aligned to the sector",
              "Faster shortlisting with a stronger fit",
              "Flexible hiring support for urgent or recurring needs",
            ].map((item) => (
              <div key={item} className="glass-panel rounded-2xl p-6">
                <div className="mb-4 grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <ArrowRight className="size-4" />
                </div>
                <p className="text-base font-medium leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl border border-line bg-card p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-teal">Let’s talk</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Need people who understand your industry?
              </h2>
            </div>

            <PrimaryLink to="/contact">Book a consultation</PrimaryLink>
          </div>
        </div>
      </section>
    </>
  );
}
