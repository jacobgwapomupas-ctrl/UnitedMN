import { J as notFound, X as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button, t as HELP_ARTICLES } from "./content-CpgsCRJU.mjs";
import { i as Route$3 } from "./router-CX6a9QTT.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/help._slug-DIz4rDhp.js
var import_jsx_runtime = require_jsx_runtime();
function HelpArticlePage() {
	const { slug } = Route$3.useParams();
	const article = HELP_ARTICLES.find((a) => a.slug === slug);
	if (!article) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-sm text-muted hover:text-primary",
				children: "← Help"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-3xl glow-title",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mt-6 p-5 text-sm leading-relaxed text-muted",
				children: article.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tickets/new",
				search: { cat: "other" },
				className: "mt-6 inline-block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Still need help? Open a ticket" })
			})
		]
	});
}
//#endregion
export { HelpArticlePage as component };
