import { i as __toESM } from "../_runtime.mjs";
import { X as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button } from "./content-CpgsCRJU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useTicketStore, l as usePlayerStore, s as uid } from "./router-CX6a9QTT.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
import { t as Input } from "./input-CmmkGiBy.mjs";
import { t as Label } from "./label-BhO4Y_Lf.mjs";
import { t as Textarea } from "./textarea-B5p9SifJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apply-CsqCocqQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ApplyPage() {
	const player = usePlayerStore((s) => s.player);
	const addApp = useTicketStore((s) => s.addApp);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		ign: player?.ign ?? "",
		discord: player?.discord ?? "",
		age: "",
		timezone: "UTC+0 gmt",
		role: "moderator",
		why: "",
		experience: ""
	});
	if (!player) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Staff application"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Log in with your Minecraft username first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				search: { next: "/apply" },
				className: "mt-6 inline-block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Log in" })
			})
		]
	});
	const ignFallback = player.ign;
	function submit(e) {
		e.preventDefault();
		addApp({
			id: uid(),
			ign: form.ign || ignFallback,
			discord: form.discord,
			age: form.age,
			timezone: form.timezone,
			role: form.role,
			why: form.why,
			experience: form.experience,
			createdAt: Date.now()
		});
		setSent(true);
		toast.success("Application sent");
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl glow-title",
				children: "Application received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "We will review it and follow up in Discord."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/profile",
				className: "mt-6 inline-block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Back to profile" })
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-lg px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl glow-title",
				children: "Staff application"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Keep it honest. We read every application."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mt-6 p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Minecraft IGN" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.ign,
							onChange: (e) => setForm({
								...form,
								ign: e.target.value
							}),
							required: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Discord" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.discord,
							onChange: (e) => setForm({
								...form,
								discord: e.target.value
							}),
							placeholder: "swaxtu",
							required: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Age" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 13,
								value: form.age,
								onChange: (e) => setForm({
									...form,
									age: e.target.value
								}),
								required: true
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.role,
								onChange: (e) => setForm({
									...form,
									role: e.target.value
								}),
								className: "flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "moderator",
										children: "Moderator"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "helper",
										children: "Helper"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "builder",
										children: "Builder"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "event",
										children: "Event manager"
									})
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Why join staff?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: form.why,
							onChange: (e) => setForm({
								...form,
								why: e.target.value
							}),
							required: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Past experience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: form.experience,
							onChange: (e) => setForm({
								...form,
								experience: e.target.value
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Send application"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ApplyPage as component };
