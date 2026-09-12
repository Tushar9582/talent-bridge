import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { x as CloudUpload } from "../_libs/lucide-react.mjs";
import { r as PageBanner, t as Button } from "./site-shell-BfIt3It_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-Dxiptpku.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ApplyPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		eyebrow: "Apply for a job",
		title: "Your next opportunity may start here.",
		description: "Share a little about yourself. Our placement team will review your profile and reach out when the right role comes up."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-teal",
				children: "A clearer next step"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-bold",
				children: "Good work deserves a good process."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 leading-relaxed text-muted-foreground",
				children: "We keep you informed, help prepare your documents, and stay close through every stage of the journey."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-5 border-l border-primary/40 pl-5 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "01 · Review"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"We get to know your experience and ambitions."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "02 · Match"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"We connect your skills with suitable opportunities."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "03 · Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"We guide you through interviews and documentation."
					] })
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "glass-panel rounded-2xl p-7 sm:p-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							name: "name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							name: "phone",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Position applying for",
							name: "position",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Industry",
							name: "industry",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Years of experience",
							name: "experience",
							required: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 block text-sm text-muted-foreground",
					children: ["Resume upload", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input bg-background/50 px-4 py-4 transition hover:border-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "Choose a PDF or DOCX file"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								name: "resume",
								accept: ".pdf,.doc,.docx",
								className: "sr-only"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 block text-sm text-muted-foreground",
					children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						rows: 5,
						className: "mt-2 w-full resize-none rounded-lg border border-input bg-background/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "rounded-full px-6",
						children: sent ? "Application received" : "Submit application"
					}), sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-teal",
						children: [
							"Thank you — we’ll review your profile with care. Questions? Email ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hr@skillmintglobal.com",
								className: "font-semibold underline",
								children: "hr@skillmintglobal.com"
							}),
							"."
						]
					})]
				})
			]
		})]
	})] });
}
function Field({ label, name, type = "text", required = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm text-muted-foreground",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "mt-2 h-11 w-full rounded-lg border border-input bg-background/50 px-4 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
		})]
	});
}
//#endregion
export { ApplyPage as component };
