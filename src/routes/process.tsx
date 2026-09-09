import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ClipboardList, FileCheck2, MessageSquare, Search, UserCheck, UsersRound } from "lucide-react";
import { PageBanner, PrimaryLink } from "@/components/site-shell";

export const Route = createFileRoute("/process")({ head: () => ({ meta: [{ title: "Recruitment Process | Skillmint Global Solutions" }, { name: "description", content: "See how Skillmint Global Solutions moves from requirement understanding to selection and follow-up." }, { property: "og:title", content: "Recruitment Process | Skillmint" }, { property: "og:description", content: "A clear, structured, and human recruitment journey." }] }), component: ProcessPage });

const steps = [
  { icon: ClipboardList, title: "Understand the Requirement", text: "We discuss the position, experience, qualifications, skills, salary range, location, and preferred candidate profile." },
  { icon: Search, title: "Source Candidates", text: "Our recruiters search job portals, professional networks, referrals, internal databases, and targeted sourcing channels." },
  { icon: UserCheck, title: "Screen and Assess", text: "Applications and initial discussions help us evaluate experience, skills, communication, and career expectations." },
  { icon: UsersRound, title: "Present the Shortlist", text: "Carefully shortlisted profiles that closely match your requirements are shared for review." },
  { icon: MessageSquare, title: "Coordinate Interviews", text: "We schedule interviews, share timely updates, and collect feedback after each stage." },
  { icon: FileCheck2, title: "Selection and Follow-Up", text: "We assist with offer coordination, documentation, and joining follow-up for a smooth experience." },
];

function ProcessPage() {
  return <><PageBanner eyebrow="Recruitment process" title="A clear path from requirement to right fit." description="Our six-step process keeps hiring organised, transparent, and focused on the people behind every profile." /><section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{steps.map(({ icon: Icon, title, text }, index) => <article key={title} className="relative rounded-2xl border border-line bg-card p-7 shadow-sm transition-transform hover:-translate-y-1"><div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-xl bg-secondary/15 text-primary"><Icon /></span><span className="font-display text-4xl font-extrabold text-secondary/60">0{index + 1}</span></div><h2 className="mt-9 font-display text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>{index < steps.length - 1 && <ArrowDown className="absolute -bottom-8 left-1/2 z-10 size-5 -translate-x-1/2 text-secondary md:hidden" />}</article>)}</div><div className="mt-16 rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12"><div className="max-w-2xl"><p className="eyebrow text-secondary">Ready when you are</p><h2 className="mt-4 font-display text-3xl font-bold">Let’s build a stress-free recruitment journey.</h2><p className="mt-4 leading-relaxed text-primary-foreground/80">Share your requirement with our team and we’ll take the next step with clarity and care.</p><div className="mt-7"><PrimaryLink to="/contact">Get in touch</PrimaryLink></div></div></div></section></>;
}