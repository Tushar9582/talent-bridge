import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight, Instagram, Linkedin, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import logo from "@/assets/skillmint-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Recruitment process", to: "/process" },
  { label: "Careers", to: "/careers" },
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
      <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
             <span className="grid h-14 w-40 place-items-center overflow-hidden rounded-lg bg-card p-1 shadow-sm"><img src={logo.url} alt="Skillmint Global Solutions logo" width={240} height={160} className="max-h-full w-full object-contain" /></span>
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
               <Link to="/contact">Get in touch <ArrowUpRight /></Link>
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
                 <Link to="/contact" onClick={() => setMenuOpen(false)}>Get in touch <ArrowUpRight /></Link>
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
         <Button asChild size="icon" className="size-14 rounded-full bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:bg-secondary/90" aria-label="Talk to Skillmint">
           <Link to="/contact"><MessageCircle /></Link>
        </Button>
      </div>
    </div>
  );
}

function UtilityBar() {
  return (
     <div className="border-b border-primary/20 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:px-8">
         <div className="hidden items-center gap-5 sm:flex"><a href="#" aria-label="LinkedIn"><Linkedin className="size-3.5" /></a><a href="#" aria-label="Instagram"><Instagram className="size-3.5" /></a><a href="#" aria-label="Facebook"><span className="text-xs font-bold">f</span></a></div>
         <div className="flex items-center gap-5"><span>[PHONE NUMBER]</span><span className="hidden sm:inline">[EMAIL]</span></div>
      </div>
    </div>
  );
}

export function PageBanner({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="aurora-field border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
         <p className="eyebrow text-secondary">{eyebrow}</p>
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

export function PrimaryLink({ to, children }: { to: "/" | "/about" | "/services" | "/industries" | "/process" | "/careers" | "/contact"; children: ReactNode }) {
  return <Button asChild className="rounded-full px-5"><Link to={to}>{children}<ArrowUpRight /></Link></Button>;
}

export function ProfileLink() {
  return <Button asChild variant="outline" className="glass-panel rounded-full px-5"><a href="/company-profile.pdf" download><FileDown /> Download company profile</a></Button>;
}

function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
         <div><Link to="/" className="inline-flex rounded-lg bg-card p-1"><img src={logo.url} alt="Skillmint Global Solutions logo" width={240} height={160} className="h-14 w-40 object-contain" /></Link><p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Pune-based HR and manpower consultancy helping organisations find capable, dependable professionals.</p><p className="mt-4 font-display font-semibold text-primary">Refining Skills. Minting Success.</p><div className="mt-5 space-y-2 text-sm text-muted-foreground"><p className="flex items-center gap-2"><Phone className="size-4 text-secondary" />[PHONE NUMBER]</p><p className="flex items-center gap-2"><Mail className="size-4 text-secondary" />[EMAIL]</p><p>[OFFICE ADDRESS]</p></div></div>
         <FooterList title="Industries" items={["Banking & Finance", "Information Technology", "Healthcare", "Manufacturing", "Logistics"]} />
         <FooterList title="Services" items={["Talent acquisition", "Workforce solutions", "Candidate screening", "Industry partnerships"]} />
         <FooterList title="Useful links" items={["About us", "Careers", "Contact us", "Terms of service", "Privacy policy"]} />
      </div>
       <div className="border-t border-line"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 Skillmint Global Solutions. All Rights Reserved.</span><span>Refining Skills. Minting Success.</span></div></div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{title}</h3><ul className="mt-5 space-y-3 text-sm text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}