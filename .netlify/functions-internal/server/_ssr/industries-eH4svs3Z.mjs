import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PrimaryLink, r as PageBanner } from "./site-shell-BfIt3It_.mjs";
import { t as meridian_team_default } from "./meridian-team-gQ5WwT9H.mjs";
import { n as meridian_hero_default, r as meridian_hospitality_default, t as meridian_healthcare_default } from "./meridian-hospitality-XrXBndS8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-eH4svs3Z.js
var import_jsx_runtime = require_jsx_runtime();
var industries = [
	"Construction",
	"Oil & Gas",
	"Hospitality",
	"Healthcare",
	"Aviation",
	"Railways",
	"Agriculture",
	"Engineering",
	"IT & Telecom",
	"Facilities Management",
	"Banking & Finance",
	"Manufacturing"
];
var images = [
	meridian_hero_default,
	meridian_team_default,
	meridian_hospitality_default,
	meridian_healthcare_default
];
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		eyebrow: "Industries we serve",
		title: "People who understand the work.",
		description: "Our sector specialists know the roles, standards, and pace behind the industries shaping the region."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-20 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: industries.map((industry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "group overflow-hidden rounded-2xl border border-line bg-card transition-transform hover:-translate-y-1",
				children: [index < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images[index],
					alt: `${industry} professionals at work`,
					width: 900,
					height: 1100,
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex aspect-[4/3] items-end bg-accent/60 p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs text-primary",
						children: ["SECTOR ", String(index + 1).padStart(2, "0")]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-bold",
						children: industry
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
				})]
			}, industry))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-card/50 p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-teal",
				children: "Need a specialist role?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl font-bold",
				children: "Let’s talk about the people your industry needs."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
				to: "/contact",
				children: "Share your requirement"
			})]
		})]
	})] });
}
//#endregion
export { IndustriesPage as component };
