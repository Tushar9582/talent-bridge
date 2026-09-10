import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as ChevronRight, T as ArrowUpRight, _ as Instagram, d as MessageCircle, f as Menu, h as Linkedin, l as Phone, m as Mail, t as X, y as FileDown } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-jB3eAwpA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var skillmint_logo_png_asset_default = {
	version: 1,
	asset_id: "0f1a76c6-4bc3-49f7-8c78-e441faab7791",
	project_id: "9f829d08-eb55-4a41-877b-90086df324ba",
	url: "/__l5e/assets-v1/0f1a76c6-4bc3-49f7-8c78-e441faab7791/skillmint-logo.png",
	r2_key: "a/v1/9f829d08-eb55-4a41-877b-90086df324ba/0f1a76c6-4bc3-49f7-8c78-e441faab7791/skillmint-logo.png",
	original_filename: "skillmint-logo.png",
	size: 547758,
	content_type: "image/png",
	created_at: "2026-09-08T05:32:46Z"
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var navItems = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About us",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Industries",
		to: "/industries"
	},
	{
		label: "Recruitment process",
		to: "/process"
	},
	{
		label: "Careers",
		to: "/careers"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function SiteChrome({ children }) {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShowTop(window.scrollY > 500);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-clip bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtilityBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center gap-3",
							onClick: () => setMenuOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-14 w-40 place-items-center overflow-hidden rounded-lg bg-card p-1 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: skillmint_logo_png_asset_default.url,
									alt: "Skillmint Global Solutions logo",
									width: 240,
									height: 160,
									className: "max-h-full w-full object-contain"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-7 text-sm text-muted-foreground lg:flex",
							"aria-label": "Primary navigation",
							children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeProps: { className: "text-foreground" },
								className: "transition-colors hover:text-foreground",
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "default",
								className: "hidden rounded-full px-5 sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "lg:hidden",
								"aria-label": menuOpen ? "Close menu" : "Open menu",
								onClick: () => setMenuOpen((open) => !open),
								children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})]
						})
					]
				}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-line bg-background px-5 py-4 lg:hidden",
					"aria-label": "Mobile navigation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col gap-1",
						children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setMenuOpen(false),
							className: "border-b border-line py-3 text-sm text-muted-foreground last:border-b-0 hover:text-foreground",
							children: item.label
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-3 w-full rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								onClick: () => setMenuOpen(false),
								children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3",
				children: [showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					className: "glass-panel rounded-full",
					"aria-label": "Back to top",
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "-rotate-90" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "icon",
					className: "size-14 rounded-full bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:bg-secondary/90",
					"aria-label": "Chat with Skillmint on WhatsApp",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/919370212543",
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})
					})
				})]
			})
		]
	});
}
function UtilityBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-primary/20 bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden items-center gap-5 sm:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "LinkedIn",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "Instagram",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "Facebook",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold",
							children: "f"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+919370212543",
					className: "transition-colors hover:text-secondary",
					children: "+91 93702 12543"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "mailto:hr@skillmintglobal.com",
					className: "hidden transition-colors hover:text-secondary sm:inline",
					children: "hr@skillmintglobal.com"
				})]
			})]
		})
	});
}
function PageBanner({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "aurora-field border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-secondary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.96] tracking-tight text-balance sm:text-7xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
					children: description
				})
			]
		})
	});
}
function SectionIntro({ eyebrow, title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-teal",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted-foreground",
					children: description
				})
			]
		}), action]
	});
}
function StatBlock({ value, label, accent = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-l border-line pl-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `font-display text-4xl font-extrabold tracking-tight ${accent ? "text-primary" : "text-foreground"}`,
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-sm text-muted-foreground",
			children: label
		})]
	});
}
function LogoMarquee() {
	const sectors = [
		"Banking & Finance",
		"Information Technology",
		"Healthcare",
		"Manufacturing",
		"Logistics",
		"Hospitality"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-14 whitespace-nowrap",
			children: [...sectors, ...sectors].map((sector, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl font-bold tracking-tight text-muted-foreground/45 transition-colors hover:text-primary",
				children: sector
			}, `${sector}-${index}`))
		})
	});
}
function PrimaryLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		className: "rounded-full px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
		})
	});
}
function ProfileLink() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "outline",
		className: "glass-panel rounded-full px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "/company-profile.pdf",
			download: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, {}), " Download company profile"]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex rounded-lg bg-card p-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: skillmint_logo_png_asset_default.url,
							alt: "Skillmint Global Solutions logo",
							width: 240,
							height: 160,
							className: "h-14 w-40 object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
						children: "Pune-based HR and manpower consultancy helping organisations find capable, dependable professionals."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display font-semibold text-primary",
						children: "Refining Skills. Minting Success."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919370212543",
								className: "flex items-center gap-2 transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-secondary" }), "+91 93702 12543"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:hr@skillmintglobal.com",
								className: "flex items-center gap-2 transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-secondary" }), "hr@skillmintglobal.com"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pune, Maharashtra, India" })
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterList, {
					title: "Industries",
					items: [
						"Banking & Finance",
						"Information Technology",
						"Healthcare",
						"Manufacturing",
						"Logistics"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterList, {
					title: "Services",
					items: [
						"Talent acquisition",
						"Workforce solutions",
						"Candidate screening",
						"Industry partnerships"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterList, {
					title: "Useful links",
					items: [
						"About us",
						"Careers",
						"Contact us",
						"Terms of service",
						"Privacy policy"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Skillmint Global Solutions. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Refining Skills. Minting Success." })]
			})
		})]
	});
}
function FooterList({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-mono text-[11px] uppercase tracking-[0.18em] text-primary",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-3 text-sm text-muted-foreground",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
	})] });
}
//#endregion
export { ProfileLink as a, StatBlock as c, PrimaryLink as i, LogoMarquee as n, SectionIntro as o, PageBanner as r, SiteChrome as s, Button as t };
