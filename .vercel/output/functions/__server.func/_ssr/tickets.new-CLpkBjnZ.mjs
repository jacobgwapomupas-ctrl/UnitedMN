import { i as __toESM } from "../_runtime.mjs";
import { X as require_jsx_runtime, Y as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button, i as categoryById, r as TICKET_CATEGORIES } from "./content-CpgsCRJU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useTicketStore, l as usePlayerStore, n as Route, s as uid } from "./router-CX6a9QTT.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
import { t as Input } from "./input-CmmkGiBy.mjs";
import { t as Label } from "./label-BhO4Y_Lf.mjs";
import { t as Textarea } from "./textarea-B5p9SifJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tickets.new-CLpkBjnZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewTicketPage() {
	const { cat } = Route.useSearch();
	const player = usePlayerStore((s) => s.player);
	const addTicket = useTicketStore((s) => s.addTicket);
	const addMessage = useTicketStore((s) => s.addMessage);
	const setStatus = useTicketStore((s) => s.setStatus);
	const navigate = useNavigate();
	const initial = categoryById(cat ?? "")?.id ?? "other";
	const [category, setCategory] = (0, import_react.useState)(initial);
	const [subject, setSubject] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	if (!player) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Open a ticket"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Sign in with your Minecraft username first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				search: { next: `/tickets/new?cat=${initial}` },
				className: "mt-6 inline-block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Log in" })
			})
		]
	});
	const playerIgn = player.ign;
	function submit(e) {
		e.preventDefault();
		const id = uid();
		addTicket({
			id,
			ign: playerIgn,
			category,
			subject: subject.trim() || categoryById(category)?.title || "Ticket",
			status: "open",
			createdAt: Date.now(),
			messages: [{
				id: uid(),
				author: "player",
				name: playerIgn,
				body: body.trim(),
				at: Date.now()
			}]
		});
		toast.success("Ticket opened");
		navigate({
			to: "/tickets/$id",
			params: { id }
		});
		window.setTimeout(() => {
			addMessage(id, {
				id: uid(),
				author: "helper",
				name: "UnitedMN Helper",
				body: "Got it — a helper will gather what staff needs. Keep an eye on this ticket.",
				at: Date.now()
			});
			setStatus(id, "waiting");
		}, 900);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-lg px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl glow-title",
				children: "Open a ticket"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Tell us what happened. Be specific."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mt-6 p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							className: "flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm",
							children: TICKET_CATEGORIES.filter((c) => c.id !== "staff").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.id,
								children: c.title
							}, c.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Subject" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: subject,
							onChange: (e) => setSubject(e.target.value),
							required: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: body,
							onChange: (e) => setBody(e.target.value),
							required: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Submit ticket"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { NewTicketPage as component };
