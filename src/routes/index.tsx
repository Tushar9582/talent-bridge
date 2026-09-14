import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Landmark, Monitor, ShieldCheck, UsersRound, Waypoints } from "lucide-react";

import heroImage from "@/assets/meridian-hero.jpg";
import healthcareImage from "@/assets/meridian-healthcare.jpg";
import hospitalityImage from "@/assets/meridian-hospitality.jpg";
import teamImage from "@/assets/meridian-team.jpg";
import { LogoMarquee, PrimaryLink, ProfileLink, SectionIntro, StatBlock } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Skillmint Refining Skills | Minting Success." },
    { name: "description", content: "Skilled and unskilled workforce placement for serious employers across the Gulf, with compliance, speed, and a human touch." },
    { property: "og:title", content: "Skillmint Refining Skills | Minting Success." },
    { property: "og:description", content: "The trusted bridge between capable people and serious employers." },
  ] }),
  component: Home,
});

function Home() {
  return <>
    <section className="aurora-field">
  <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8 lg:pb-16 lg:pt-24">
    <div className="rise-in max-w-4xl">
      <p className="eyebrow text-primary">
        The trusted bridge · People to employers
      </p>

      <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl">
        Refining Skills{" "}
        <span className="text-primary">Minting Success.</span>
      </h1>

      <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Meridian places skilled and unskilled talent across construction,
        healthcare, aviation and beyond — with compliance, speed and a human
        touch.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ProfileLink />
        <PrimaryLink to="/careers">Apply for a job</PrimaryLink>
      </div>
    </div>

    <div className="mt-14 grid gap-4 lg:grid-cols-12">
      <div className="glass-panel rise-in overflow-hidden rounded-2xl p-2 lg:col-span-8">
        <img
          src={heroImage}
          alt="Diverse construction professionals reviewing blueprints in Dubai"
          width={1600}
          height={900}
          className="aspect-[16/9] w-full rounded-xl object-cover"
        />
      </div>

      <div className="glass-panel rise-in grid grid-cols-2 gap-7 rounded-2xl p-6 lg:col-span-4">
        <StatBlock
          value="5+"
          label="Years of experience"
          accent
        />

        <StatBlock
          value="50+"
          label="Partner employers"
        />

        <StatBlock
          value="1 Lakh"
          label="Candidates placed"
        />

        <StatBlock
          value="12+"
          label="Industries served"
        />
      </div>
    </div>
  </div>
</section>

<section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
  <p className="eyebrow mb-5 text-muted-foreground">
    Trusted by leading companies
  </p>

  <LogoMarquee />
</section>

<section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
  <SectionIntro
    eyebrow="What we do"
    title="Recruitment, handled end to end"
    description="From first brief to first day, our teams keep the process clear, compliant, and deeply human."
    action={
      <Link
        to="/services"
        className="text-sm font-semibold text-primary hover:underline"
      >
        See all services{" "}
        <ArrowUpRight className="inline size-4" />
      </Link>
    }
  />

  <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {[
      [
        "01",
        "Recruitment services",
        "Vetted skilled and unskilled talent, sourced according to your business requirements."
      ],
      [
        "02",
        "Recruitment handling",
        "Complete recruitment coordination, candidate screening, interview scheduling, and workforce placement handled by our team."
      ],
      [
        "03",
        "HR management",
        "Payroll, onboarding, employee coordination, and workforce administration that stays on track."
      ],
      [
        "04",
        "Corporate Training",
        "Upskill your workforce with specialized training programs in BFS, IT, and other key industries."
      ]
    ].map(([number, title, text]) => (
      <div
        key={number}
        className="glass-panel group min-h-48 rounded-2xl p-6 transition-transform hover:-translate-y-1"
      >
        <span className="font-mono text-xs text-teal">
          {number}
        </span>

        <h3 className="mt-8 font-display text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>

        <Link
          to="/services"
          className="mt-5 inline-flex text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
        >
          Explore service{" "}
          <ArrowUpRight className="ml-1 size-4" />
        </Link>
      </div>
    ))}
  </div>
</section>

{/* --- NEW TRAINING SECTION --- */}
<section className="border-y border-line bg-card/35">
  <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
    <SectionIntro
      eyebrow="Upskill your workforce"
      title="Specialized Corporate Training"
      description="We provide industry-focused training to bridge the skill gap, with specialized modules for Banking & Financial Services (BFS) and Information Technology (IT) sectors."
    />
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      <div className="glass-panel rounded-2xl p-8 transition-transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
            <Landmark className="size-6" />
          </span>
          <h3 className="font-display text-2xl font-bold">Banking & Financial Services (BFS)</h3>
        </div>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Comprehensive training programs covering banking operations, financial analysis, regulatory compliance, risk management, and customer relationship management tailored for the modern financial landscape.
        </p>
      </div>
      <div className="glass-panel rounded-2xl p-8 transition-transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
            <Monitor className="size-6" />
          </span>
          <h3 className="font-display text-2xl font-bold">Information Technology (IT)</h3>
        </div>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Cutting-edge technical training in software development, cloud computing, cybersecurity, data analytics, and emerging technologies, designed to equip professionals with in-demand skills.
        </p>
      </div>
    </div>
  </div>
</section>
{/* --- END NEW TRAINING SECTION --- */}

<section className="border-y border-line bg-card/35">
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
    <div>
      <p className="eyebrow text-teal">Why Meridian</p>

      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance">
        The right people change what’s possible.
      </h2>

      <p className="mt-5 leading-relaxed text-muted-foreground">
        We combine local knowledge, international reach, and a careful
        understanding of people to help teams grow with confidence.
      </p>

      <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
        {[
          "Tailored recruitment solutions",
          "Expertise across critical industries",
          "Global reach with local care"
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-3"
          >
            <span className="grid size-6 place-items-center rounded-full bg-teal/15 text-teal">
              <Check className="size-4" />
            </span>

            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <PrimaryLink to="/about">
          Read more about us
        </PrimaryLink>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <img
        src={teamImage}
        alt="Meridian recruiters reviewing a candidate profile together"
        width={1200}
        height={900}
        className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover"
      />

      <img
        src={healthcareImage}
        alt="Healthcare professionals walking together in a hospital"
        width={900}
        height={1100}
        loading="lazy"
        className="aspect-[4/5] w-full rounded-2xl object-cover"
      />

      <div className="glass-panel flex flex-col justify-end rounded-2xl p-6">
        <UsersRound className="size-8 text-primary" />

        <div className="mt-8 font-display text-3xl font-bold">
          Human first
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Every placement carries a person’s ambition with it.
        </p>
      </div>
    </div>
  </div>
</section>

{/* --- UPDATED INDUSTRIES SECTION (NOW SHOWING ONLY 3) --- */}
<section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
  <SectionIntro
    eyebrow="Skillmint Refining Skills | Minting Success."
    title="Industries we understand"
    description="Specialists who speak the language of your work, from the field to the boardroom."
    action={
      <Link
        to="/industries"
        className="text-sm font-semibold text-primary hover:underline"
      >
        View all industries{" "}
        <ArrowUpRight className="inline size-4" />
      </Link>
    }
  />

  <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {[
      ["Banking & Finance", heroImage],
      ["Insurance", healthcareImage],
      ["Information Technology", teamImage]
    ].map(([name, image]) => (
      <Link
        to="/industries"
        key={name}
        className="group relative overflow-hidden rounded-2xl"
      >
        <img
          src={image}
          alt={`${name} workforce`}
          width={900}
          height={1100}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5 pt-16">
          <span className="font-display text-lg font-bold">
            {name}
          </span>

          <span className="ml-2 text-primary transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </Link>
    ))}
  </div>
</section>
{/* --- END UPDATED INDUSTRIES SECTION --- */}

<section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
  <div className="glass-panel grid gap-8 rounded-2xl p-8 md:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
    <div>
      <p className="eyebrow text-primary">
        Client voice
      </p>

      <blockquote className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        “Meridian filled two hundred and forty roles across three sites in
        nine weeks — compliant, on time, and genuinely the right people.”
      </blockquote>

      <div className="mt-8 flex items-center gap-3">
        <div className="grid size-11 place-items-center rounded-full bg-teal/15 text-teal">
          LO
        </div>

        <div>
          <div className="text-sm font-semibold">
            Lena Okafor
          </div>

          <div className="text-xs text-muted-foreground">
            Director of Operations, Delta Energy Group
          </div>
        </div>
      </div>
    </div>

    <div className="hidden overflow-hidden rounded-xl lg:block">
      <img
        src={hospitalityImage}
        alt="Hospitality team welcoming a guest"
        width={900}
        height={1100}
        loading="lazy"
        className="aspect-[4/5] w-full object-cover"
      />
    </div>
  </div>
</section>

<section className="aurora-field border-y border-line">
  <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8">
    <div>
      <h2 className="font-display text-4xl font-extrabold tracking-tight">
        Looking to hire top talent?
      </h2>

      <p className="mt-2 text-muted-foreground">
        Tell us the role and the industry. We’ll bring you the people.
      </p>
    </div>

    <PrimaryLink to="/contact">
      Get in touch
    </PrimaryLink>
  </div>
</section>

  </>;
}