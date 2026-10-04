import { i as __toESM } from "../_runtime.mjs";
import { J as notFound, X as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button, i as categoryById } from "./content-CpgsCRJU.mjs";
import { c as useTicketStore, l as usePlayerStore, o as PlayerSkin, r as Route$1, s as uid } from "./router-CX6a9QTT.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
import { t as Textarea } from "./textarea-B5p9SifJ.mjs";
import { t as Badge } from "./badge-DUdPUOVg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tickets._id-DKipCiKG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TicketDetail() {
	const { id } = Route$1.useParams();
	const player = usePlayerStore((s) => s.player);
	const hydrated = useTicketStore((s) => s.hydrated);
	const ticket = useTicketStore((s) => s.tickets.find((t) => t.id === id));
	const addMessage = useTicketStore((s) => s.addMessage);
	const setStatus = useTicketStore((s) => s.setStatus);
	const [body, setBody] = (0, import_react.useState)("");
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-2xl px-4 py-16 text-sm text-muted",
		children: "Loading ticket…"
	});
	if (!ticket) throw notFound();
	const current = ticket;
	function send(e) {
		e.preventDefault();
		if (!body.trim() || !player) return;
		addMessage(current.id, {
			id: uid(),
			author: "player",
			name: player.ign,
			body: body.trim(),
			at: Date.now()
		});
		setBody("");
		window.setTimeout(() => {
			addMessage(current.id, {
				id: uid(),
				author: "helper",
				name: "UnitedMN Helper",
				body: "Noted. We'll keep this ticket updated.",
				at: Date.now()
			});
		}, 700);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tickets",
				className: "text-sm text-muted hover:text-primary",
				children: "← Tickets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl glow-title",
					children: current.subject
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: categoryById(current.category)?.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: current.status })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-3",
				children: current.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerSkin, {
								ign: m.author === "helper" ? "Notch" : m.name,
								size: 24
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-subtle",
								children: new Date(m.at).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: m.body
					})]
				}, m.id))
			}),
			player ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: send,
				className: "mt-5 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: body,
					onChange: (e) => setBody(e.target.value),
					placeholder: "Reply…"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Send"
					}), current.status !== "closed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						onClick: () => setStatus(current.id, "closed"),
						children: "Close ticket"
					}) : null]
				})]
			}) : null
		]
	});
}
//#endregion
export { TicketDetail as component };
