import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight, FileDown, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import mark from "@/../public/meridian-mark.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Clients", to: "/clients" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <UtilityBar />
      <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src={mark} alt="Meridian Workforce mark" width={40} height={40} className="size-10 rounded-lg" />
            <span className="font-display text-lg font-bold tracking-tight">
              Meridian <span className="font-sans text-sm font-normal text-muted-foreground">Workforce</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="default" className="hidden rounded-full px-5 sm:inline-flex">
              <Link to="/apply">Apply for a job <ArrowUpRight /></Link>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-line bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="border-b border-line py-3 text-sm text-muted-foreground last:border-b-0 hover:text-foreground">
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-3 w-full rounded-full">
                <Link to="/apply" onClick={() => setMenuOpen(false)}>Apply for a job <ArrowUpRight /></Link>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>
      <SiteFooter />

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
        {showTop && (
          <Button variant="outline" size="icon" className="glass-panel rounded-full" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ChevronRight className="-rotate-90" />
          </Button>
        )}
        <Button asChild size="icon" className="size-14 rounded-full bg-teal text-teal-foreground shadow-lg shadow-teal/20 hover:bg-teal/90" aria-label="WhatsApp live help">
          <a href="https://wa.me/97145550142" target="_blank" rel="noreferrer"><MessageCircle /></a>
        </Button>
      </div>
    </div>
  );
}

function UtilityBar() {
  return (
    <div className="border-b border-line bg-background/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:px-8">
        <span className="truncate">Licence No. ME/HR/2019-0442 · Overseas placement</span>
        <div className="hidden items-center gap-5 sm:flex"><span>+971 4 555 0142</span><span className="text-teal">WhatsApp live help</span></div>
      </div>
    </div>
  );
}

export function PageBanner({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="aurora-field border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.96] tracking-tight text-balance sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}

export function SectionIntro({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl"><p className="eyebrow text-teal">{eyebrow}</p><h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>{description && <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>}</div>
      {action}
    </div>
  );
}

export function StatBlock({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return <div className="border-l border-line pl-5"><div className={`font-display text-4xl font-extrabold tracking-tight ${accent ? "text-primary" : "text-foreground"}`}>{value}</div><div className="mt-2 text-sm text-muted-foreground">{label}</div></div>;
}

export function LogoMarquee() {
  const logos = ["AL NOOR", "DELTA ENERGY", "HAVEN", "COBALT", "NORTHGATE", "SKYLINE"];
  return (
    <div className="overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max gap-14 whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => <span key={`${logo}-${index}`} className="font-display text-xl font-bold tracking-tight text-muted-foreground/45 transition-colors hover:text-primary">{logo}</span>)}
      </div>
    </div>
  );
}

export function PrimaryLink({ to, children }: { to: "/" | "/about" | "/services" | "/industries" | "/clients" | "/contact" | "/apply"; children: ReactNode }) {
  return <Button asChild className="rounded-full px-5"><Link to={to}>{children}<ArrowUpRight /></Link></Button>;
}

export function ProfileLink() {
  return <Button asChild variant="outline" className="glass-panel rounded-full px-5"><a href="/company-profile.pdf" download><FileDown /> Download company profile</a></Button>;
}

function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div><Link to="/" className="flex items-center gap-3"><img src={mark} alt="Meridian Workforce mark" width={40} height={40} className="size-10 rounded-lg" /><span className="font-display text-lg font-bold">Meridian</span></Link><p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">A trusted bridge between capable people and serious employers across the Gulf and beyond.</p><div className="mt-5 text-sm text-muted-foreground">Marina Tower, Dubai<br />+971 4 555 0142<br />hello@meridianworkforce.com</div></div>
        <FooterList title="Industries" items={["Construction", "Oil & Gas", "Healthcare", "Aviation", "IT & Telecom"]} />
        <FooterList title="Services" items={["Recruitment", "Visa stamping", "Immigration", "HR management", "Personality assessment"]} />
        <FooterList title="Useful links" items={["About us", "Our clients", "Contact us", "Terms & conditions", "Privacy policy"]} />
      </div>
      <div className="border-t border-line"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 Meridian Workforce. All rights reserved.</span><span>People placed with care.</span></div></div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{title}</h3><ul className="mt-5 space-y-3 text-sm text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}