import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as ArrowRight, b as FileCheckCorner, c as SearchCheck, o as ShieldCheck, r as UserRoundCheck } from "../_libs/lucide-react.mjs";
import { i as PrimaryLink, o as SectionIntro, r as PageBanner } from "./site-shell-jB3eAwpA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CMF17Php.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		icon: SearchCheck,
		title: "Talent Acquisition & Recruitment",
		description: "End-to-end sourcing and hiring support across industries and role levels.",
		items: [
			"Requirement understanding",
			"Targeted sourcing",
			"Candidate shortlisting",
			"Interview coordination"
		]
	},
	{
		icon: FileCheckCorner,
		title: "HR & Workforce Solutions",
		description: "Strategic, cost-efficient HR management support, consultancy, and workforce planning for growing businesses.",
		items: [
			"Workforce planning",
			"HR consultancy",
			"Onboarding support",
			"People operations"
		]
	},
	{
		icon: ShieldCheck,
		title: "Candidate Screening & Assessment",
		description: "In-depth evaluation of experience, skills, and job fit to identify the ideal talent match for each role.",
		items: [
			"Profile evaluation",
			"Experience checks",
			"Communication assessment",
			"Job-fit review"
		]
	},
	{
		icon: UserRoundCheck,
		title: "Strategic Industry Partnerships",
		description: "Long-term recruitment partnerships built around each client's workforce challenges and business objectives.",
		items: [
			"Single-role hiring",
			"Large-scale hiring",
			"Flexible engagement",
			"Ongoing support"
		]
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			eyebrow: "Our services",
			title: "Talent solutions built around your needs.",
			description: "Whether you need to fill a single position or manage large-scale hiring, we offer flexible and dependable talent solutions."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: services.map(({ icon: Icon, title, description, items }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "glass-panel rounded-2xl p-7 transition-transform hover:-translate-y-1 sm:p-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center rounded-xl bg-secondary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-teal",
								children: ["0", index + 1]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10 font-display text-2xl font-bold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-lg leading-relaxed text-muted-foreground",
							children: description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 grid gap-3 sm:grid-cols-2",
							children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-secondary" }), item]
							}, item))
						})
					]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-accent/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-20 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
					eyebrow: "Our promise",
					title: "A process you can trust.",
					description: "We combine thoughtful assessment, clear communication, and dedicated support from the first brief to the final selection."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
						to: "/process",
						children: "See our recruitment process"
					})
				})]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
