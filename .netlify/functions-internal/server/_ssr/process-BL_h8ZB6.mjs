import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as ArrowDown, S as ClipboardList, b as FileCheckCorner, i as UserCheck, n as UsersRound, s as Search, u as MessageSquare } from "../_libs/lucide-react.mjs";
import { i as PrimaryLink, r as PageBanner } from "./site-shell-jB3eAwpA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-BL_h8ZB6.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		icon: ClipboardList,
		title: "Understand the Requirement",
		text: "We discuss the position, experience, qualifications, skills, salary range, location, and preferred candidate profile."
	},
	{
		icon: Search,
		title: "Source Candidates",
		text: "Our recruiters search job portals, professional networks, referrals, internal databases, and targeted sourcing channels."
	},
	{
		icon: UserCheck,
		title: "Screen and Assess",
		text: "Applications and initial discussions help us evaluate experience, skills, communication, and career expectations."
	},
	{
		icon: UsersRound,
		title: "Present the Shortlist",
		text: "Carefully shortlisted profiles that closely match your requirements are shared for review."
	},
	{
		icon: MessageSquare,
		title: "Coordinate Interviews",
		text: "We schedule interviews, share timely updates, and collect feedback after each stage."
	},
	{
		icon: FileCheckCorner,
		title: "Selection and Follow-Up",
		text: "We assist with offer coordination, documentation, and joining follow-up for a smooth experience."
	}
];
function ProcessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		eyebrow: "Recruitment process",
		title: "A clear path from requirement to right fit.",
		description: "Our six-step process keeps hiring organised, transparent, and focused on the people behind every profile."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-20 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: steps.map(({ icon: Icon, title, text }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "relative rounded-2xl border border-line bg-card p-7 shadow-sm transition-transform hover:-translate-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-xl bg-secondary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-4xl font-extrabold text-secondary/60",
							children: ["0", index + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-9 font-display text-xl font-bold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: text
					}),
					index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "absolute -bottom-8 left-1/2 z-10 size-5 -translate-x-1/2 text-secondary md:hidden" })
				]
			}, title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-secondary",
						children: "Ready when you are"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl font-bold",
						children: "Let’s build a stress-free recruitment journey."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-primary-foreground/80",
						children: "Share your requirement with our team and we’ll take the next step with clarity and care."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
							to: "/contact",
							children: "Get in touch"
						})
					})
				]
			})
		})]
	})] });
}
//#endregion
export { ProcessPage as component };
