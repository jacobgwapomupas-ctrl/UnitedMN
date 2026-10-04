import { X as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button, i as categoryById } from "./content-CpgsCRJU.mjs";
import { c as useTicketStore, l as usePlayerStore } from "./router-CX6a9QTT.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
import { t as Badge } from "./badge-DUdPUOVg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tickets.index-B_gqftU5.js
var import_jsx_runtime = require_jsx_runtime();
function TicketsPage() {
	const player = usePlayerStore((s) => s.player);
	const tickets = useTicketStore((s) => s.tickets);
	if (!player) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Tickets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Log in to view and open tickets."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				search: { next: "/tickets" },
				className: "mt-6 inline-block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Log in" })
			})
		]
	});
	const mine = tickets.filter((t) => t.ign.toLowerCase() === player.ign.toLowerCase());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl glow-title",
				children: "My tickets"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tickets/new",
				search: { cat: "other" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					children: "New"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 space-y-2",
			children: mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No tickets yet. Open one from the help desk."
			}) : mine.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tickets/$id",
				params: { id: t.id },
				className: "block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex items-center justify-between p-4 hover:border-primary/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: t.subject
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted",
						children: categoryById(t.category)?.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.status })]
				})
			}, t.id))
		})]
	});
}
//#endregion
export { TicketsPage as component };
