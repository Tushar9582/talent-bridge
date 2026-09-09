# Talent Bridge

Lovable AI Prompt — Manpower/Recruitment Consultancy Website

Copy everything below into Lovable as your build prompt. Swap in your own company name, logo, phone, email, and photos where marked with [ ].

PROMPT

Build a modern, beautiful, professional website for [COMPANY NAME], a manpower recruitment & overseas placement consultancy that helps companies hire skilled and unskilled workers for industries like Construction, Oil & Gas, Hospitality, Healthcare, Aviation, Railways, Agriculture, Engineering, IT & Telecom, Facilities Management, Banking & Finance, and Manufacturing.

The site should feel trustworthy, corporate, and warm at the same time — not a generic template. Think clean whitespace, confident typography, a professional blue/navy + gold or teal accent palette, subtle motion, and real human photography (people at work, handshakes, diverse workforce) rather than clip-art icons everywhere.

Overall style direction

Modern corporate aesthetic — rounded cards, soft shadows, generous padding, a strong grid.

Primary color: deep navy/blue (trust, professionalism). Accent: gold or teal for CTAs and highlights.

Clean sans-serif typography (e.g. Inter/Poppins style) — bold large headings, readable body text.

Smooth scroll-reveal animations on sections, subtle hover lift on cards, and a marquee/auto-scroll logo strip for clients.

Fully responsive (mobile-first), sticky/transparent-to-solid header on scroll.

Give it a genuine "human touch" — real photography, warm micro-copy, testimonials with names/roles, not just stock corporate jargon.

Global elements

Top utility bar: license/registration number on the left, phone number + WhatsApp icon on the right, small social icons (LinkedIn, Facebook, Instagram, Twitter).

Header: logo, nav (Home, About Us, Our Services, Industries, Our Clients, Contact Us), a prominent "Apply for Job" button, sticky on scroll.

Footer (on every page): company blurb + logo, office address, phone, email, social icons, three link columns (Industries We Serve, Our Services, Useful Links incl. Terms, Privacy Policy, Download Company Profile PDF), copyright line.

Floating WhatsApp "Live Help" button bottom-right on every page.

Back-to-top button.

Page 1 — Home

Hero section: full-width background image/video of workers/professionals, big headline (e.g. "Gulf Country's Smart Placement Services"), short supporting line about staffing solutions, two CTAs — "Download Profile" (PDF) and "Apply for Job".

About snapshot: image on one side, text on other — short company intro (years of experience, mission), 3 bullet highlights (e.g. Tailored Recruitment Solutions, Expertise Across Industries, Global Reach & Quality Assurance), "Read More" button linking to About page.

Animated stat counters: Years of Experience, Projects Done, Happy Clients, Team Size — large numbers that count up on scroll.

Services preview: 3–4 service cards with icons (Visa Stamping, HR Management, Immigration Service, Recruitment Services), each with a one-line description and "See More Services" CTA.

Our Clients strip: heading "Trusted by Leading Companies", auto-scrolling logo carousel (grayscale logos that go to color on hover).

Industries We Serve: responsive grid/carousel of industry cards (image + title + short description) — Construction, Oil & Gas, Hospitality, Healthcare, Aviation, Railways, Agriculture, Engineering, IT & Telecom, Facilities Management, Banking & Finance, Manufacturing.

Testimonials section: 2–3 client/candidate quotes with photo, name, and company/role, in a card carousel.

CTA banner: bold closing section — "Looking to hire top talent?" with Get In Touch button, before the footer.

Page 2 — About Us

Hero banner with page title.

Company story: founding, mission, vision, values.

"Why Choose Us" grid (4–6 points with icons: Experience, Global Network, Ethical Practices, Speed, Compliance, Support).

Leadership/team section (optional photo grid).

Timeline or milestones (years of growth).

CTA to Contact/Apply.

Page 3 — Our Services

Hero banner.

Detailed service cards/sections for: Visa Stamping, Immigration Service, HR Management, Personality Assessment, Recruitment Services — each with icon, description, and what's included as a bullet list.

A "Process" section showing the recruitment process as numbered steps (e.g. Requirement Analysis → Sourcing → Screening → Interview → Visa & Documentation → Deployment).

Page 4 — Industries

Hero banner.

Full grid of all industries served (image cards, hover overlay with description), each clickable.

Page 5 — Our Clients

Hero banner "Our Clients".

Full responsive logo grid (grayscale to color on hover), organized cleanly (not just a flat dump of images) — group into a nice auto-scrolling belt plus a static grid below.

Optional: a couple of client testimonial quotes here too.

Page 6 — Contact Us

Hero banner.

Split layout: contact form (Name, Email, Phone, Subject, Message) on one side, office details + embedded Google Map on the other.

Office address, phone numbers, email, working hours.

Social links.

Page 7 — Apply for Job

Simple, friendly application form: Name, Email, Phone, Position Applying For, Industry, Experience, Resume Upload, Message.

Short reassuring copy about the hiring process.

Content placeholders to include (replace with real content)

Company name: [COMPANY NAME]

Tagline: [TAGLINE]

Registration/License No.: [LICENSE NUMBER]

Phone: [PHONE NUMBER]

WhatsApp link: [WHATSAPP LINK]

Email: [EMAIL]

Office address: [FULL ADDRESS]

Years of experience / stats: [NUMBERS]

Client logos: [UPLOAD LOGOS]

Team/about photos: [UPLOAD PHOTOS]

Technical notes for Lovable

Build as a multi-page React site (or single-page with clear section anchors if multi-page routing isn't preferred) using React Router for Home / About / Services / Industries / Clients / Contact / Apply Job.

Use Tailwind CSS for styling with a custom color theme (navy + gold/teal accents).

Add scroll-reveal animations (e.g. via Framer Motion) to sections and cards.

Make the logo strip an auto-scrolling infinite marquee.

Make stat counters animate on scroll into view.

Ensure full mobile responsiveness with a clean hamburger menu.

Add proper hover states, focus states, and accessible alt text on all images.

Keep the design airy and premium — avoid clutter, use consistent spacing, and let photography do a lot of the "human touch" work.

Tip: Paste the whole prompt into Lovable in one go, then follow up with page-by-page refinement prompts (e.g. "now make the Home hero more dynamic" or "redesign the testimonials as a carousel") once the first draft is generated.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9f829d08-eb55-4a41-877b-90086df324ba).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
