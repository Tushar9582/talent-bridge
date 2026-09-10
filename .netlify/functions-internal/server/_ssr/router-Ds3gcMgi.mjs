import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { s as SiteChrome } from "./site-shell-jB3eAwpA.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ds3gcMgi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-6B9HQtTW.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Skillmint Global Solutions | HR & Manpower Consultancy" },
			{
				name: "description",
				content: "Skillmint Global Solutions connects organisations with capable professionals through dependable HR, recruitment, and workforce solutions in Pune and beyond."
			},
			{
				name: "author",
				content: "Skillmint Global Solutions"
			},
			{
				property: "og:title",
				content: "Skillmint Global Solutions | HR & Manpower Consultancy"
			},
			{
				property: "og:description",
				content: "Refining Skills. Minting Success. Human recruitment and workforce solutions from Pune."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@skillmintglobal"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.png",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-CqH8VCFe.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Meridian Workforce | Gulf Talent Placement" },
		{
			name: "description",
			content: "Skilled and unskilled workforce placement for serious employers across the Gulf, with compliance, speed, and a human touch."
		},
		{
			property: "og:title",
			content: "Meridian Workforce | Gulf Talent Placement"
		},
		{
			property: "og:description",
			content: "The trusted bridge between capable people and serious employers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-7JHIDvS4.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Skillmint Global Solutions" },
		{
			name: "description",
			content: "Learn how Skillmint Global Solutions helps organisations build capable, dependable teams through ethical recruitment."
		},
		{
			property: "og:title",
			content: "About Skillmint Global Solutions"
		},
		{
			property: "og:description",
			content: "A Pune-based recruitment partner built on integrity, partnership, innovation, and excellence."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./careers-BtHsZKnE.mjs");
var Route$6 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: "Careers | Skillmint Global Solutions" },
		{
			name: "description",
			content: "Share your experience with Skillmint Global Solutions and explore suitable career opportunities."
		},
		{
			property: "og:title",
			content: "Careers | Skillmint Global Solutions"
		},
		{
			property: "og:description",
			content: "Your next opportunity may start with a simple application."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-CeSuchSr.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Skillmint Global Solutions" },
		{
			name: "description",
			content: "Speak with Skillmint Global Solutions about recruitment and workforce support."
		},
		{
			property: "og:title",
			content: "Contact Skillmint Global Solutions"
		},
		{
			property: "og:description",
			content: "Tell us what your team needs next."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./industries-CjC9_cvS.mjs");
var Route$4 = createFileRoute("/industries")({
	head: () => ({ meta: [
		{ title: "Industries We Serve | Meridian Workforce" },
		{
			name: "description",
			content: "Meridian supports employers across construction, energy, healthcare, hospitality, aviation, engineering, and more."
		},
		{
			property: "og:title",
			content: "Industries We Serve | Meridian Workforce"
		},
		{
			property: "og:description",
			content: "Sector-aware talent placement for critical industries."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-JaEgEBta.mjs");
var Route$3 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy | Skillmint Global Solutions" },
		{
			name: "description",
			content: "How Skillmint Global Solutions handles information shared through this website."
		},
		{
			property: "og:title",
			content: "Privacy Policy | Skillmint Global Solutions"
		},
		{
			property: "og:description",
			content: "A clear approach to privacy and responsible information handling."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./process-BL_h8ZB6.mjs");
var Route$2 = createFileRoute("/process")({
	head: () => ({ meta: [
		{ title: "Recruitment Process | Skillmint Global Solutions" },
		{
			name: "description",
			content: "See how Skillmint Global Solutions moves from requirement understanding to selection and follow-up."
		},
		{
			property: "og:title",
			content: "Recruitment Process | Skillmint"
		},
		{
			property: "og:description",
			content: "A clear, structured, and human recruitment journey."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-CMF17Php.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "HR & Recruitment Services | Skillmint" },
		{
			name: "description",
			content: "Explore Skillmint's talent acquisition, workforce solutions, candidate assessment, and strategic industry partnerships."
		},
		{
			property: "og:title",
			content: "HR & Recruitment Services | Skillmint"
		},
		{
			property: "og:description",
			content: "Flexible and dependable talent solutions for every stage of growth."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-CASRU4vd.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions | Skillmint Global Solutions" },
		{
			name: "description",
			content: "Terms and conditions for using Skillmint Global Solutions services."
		},
		{
			property: "og:title",
			content: "Terms & Conditions | Skillmint Global Solutions"
		},
		{
			property: "og:description",
			content: "The terms that guide our services and communications."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	CareersRoute: Route$6.update({
		id: "/careers",
		path: "/careers",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	IndustriesRoute: Route$4.update({
		id: "/industries",
		path: "/industries",
		getParentRoute: () => Route$9
	}),
	PrivacyRoute: Route$3.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$9
	}),
	ProcessRoute: Route$2.update({
		id: "/process",
		path: "/process",
		getParentRoute: () => Route$9
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$9
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
