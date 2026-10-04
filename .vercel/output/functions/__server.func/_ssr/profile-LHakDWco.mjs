import { X as require_jsx_runtime, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button, i as categoryById } from "./content-CpgsCRJU.mjs";
import { c as useTicketStore, l as usePlayerStore, o as PlayerSkin } from "./router-CX6a9QTT.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
import { t as Badge } from "./badge-DUdPUOVg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-LHakDWco.js
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const player = usePlayerStore((s) => s.player);
	const logout = usePlayerStore((s) => s.logout);
	const tickets = useTicketStore((s) => s.tickets);
	const apps = useTicketStore((s) => s.apps);
	const navigate = useNavigate();
	if (!player) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Sign in with your Minecraft username to view this page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "mt-6 inline-block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Log in" })
			})
		]
	});
	const mine = tickets.filter((t) => t.ign.toLowerCase() === player.ign.toLowerCase());
	const myApps = apps.filter((a) => a.ign.toLowerCase() === player.ign.toLowerCase());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-col gap-4 p-5 sm:flex-row sm:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerSkin, {
						ign: player.ign,
						size: 72,
						className: "rounded-md ring-2 ring-primary/40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl glow-title",
							children: player.ign
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								player.discord ? `Discord ${player.discord} · ` : "",
								"plays on ",
								player.ip
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => {
							logout();
							navigate({ to: "/" });
						},
						children: "Log out"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Tickets"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/tickets/new",
					search: { cat: "other" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						children: "New ticket"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-2",
				children: mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No tickets yet."
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-xl",
				children: "Staff applications"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-2",
				children: myApps.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"None yet.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/apply",
							className: "text-primary hover:underline",
							children: "Apply here"
						})
					]
				}) : myApps.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: a.role
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "received" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: a.why
					})]
				}, a.id))
			})
		]
	});
}
//#endregion
export { ProfilePage as component };
