import { i as __toESM } from "../_runtime.mjs";
import { X as require_jsx_runtime, Y as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as isValidIgn, c as Button, n as SERVER_IPS } from "./content-CpgsCRJU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Route$6, l as usePlayerStore, o as PlayerSkin } from "./router-CX6a9QTT.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
import { t as Input } from "./input-CmmkGiBy.mjs";
import { t as Label } from "./label-BhO4Y_Lf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Bcg6LRWZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { next } = Route$6.useSearch();
	const navigate = useNavigate();
	const login = usePlayerStore((s) => s.login);
	const [mode, setMode] = (0, import_react.useState)("login");
	const [ign, setIgn] = (0, import_react.useState)("");
	const [discord, setDiscord] = (0, import_react.useState)("");
	const [ip, setIp] = (0, import_react.useState)(SERVER_IPS[0].host);
	function goAfter() {
		if (next?.startsWith("/tickets/new")) {
			const params = new URLSearchParams(next.split("?")[1] ?? "");
			navigate({
				to: "/tickets/new",
				search: { cat: params.get("cat") ?? "other" }
			});
			return;
		}
		if (next === "/apply") {
			navigate({ to: "/apply" });
			return;
		}
		if (next === "/tickets") {
			navigate({ to: "/tickets" });
			return;
		}
		navigate({ to: "/" });
	}
	function submit(e) {
		e.preventDefault();
		if (!isValidIgn(ign)) {
			toast.error("Use a valid Minecraft name (3–16 letters, numbers, underscore).");
			return;
		}
		login({
			ign: ign.trim(),
			discord: discord.trim(),
			ip,
			createdAt: Date.now()
		});
		toast.success(mode === "register" ? "Account ready" : `Welcome, ${ign.trim()}`);
		goAfter();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-md px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl glow-title",
				children: "Account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "No password. Sign in with your Minecraft username — same as in-game."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-2 gap-1 rounded-lg border border-border bg-surface p-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `h-10 rounded-md text-sm ${mode === "login" ? "bg-elevated text-primary" : "text-muted"}`,
					onClick: () => setMode("login"),
					children: "Login"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `h-10 rounded-md text-sm ${mode === "register" ? "bg-elevated text-primary" : "text-muted"}`,
					onClick: () => setMode("register"),
					children: "Register"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mt-4 p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ign",
							children: "Minecraft username"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "ign",
							value: ign,
							onChange: (e) => setIgn(e.target.value),
							placeholder: "Swaxtu",
							autoComplete: "username",
							required: true
						})] }),
						ign.trim().length >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-md border border-border bg-bg p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerSkin, {
								ign: ign.trim(),
								size: 48
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: ign.trim()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted",
								children: "Face skin preview"
							})] })]
						}) : null,
						mode === "register" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "discord",
							children: "Discord"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "discord",
							value: discord,
							onChange: (e) => setDiscord(e.target.value),
							placeholder: "swaxtu"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ip",
							children: "Preferred server IP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "ip",
							value: ip,
							onChange: (e) => setIp(e.target.value),
							className: "flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm",
							children: SERVER_IPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: s.host,
								children: [
									s.label,
									" — ",
									s.host
								]
							}, s.host))
						})] })] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: mode === "register" ? "Create account" : "Log in"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { LoginPage as component };
