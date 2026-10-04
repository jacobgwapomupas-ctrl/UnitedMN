import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button, n as SERVER_IPS } from "./content-CpgsCRJU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/play-aBMviq2J.js
var import_jsx_runtime = require_jsx_runtime();
function PlayPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl glow-title",
				children: "Play UnitedMN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Java 1.21+ and Bedrock latest. Copy an address and add it in Minecraft multiplayer."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-3",
				children: SERVER_IPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex items-center justify-between gap-3 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wide text-muted",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-sm text-primary",
						children: s.host
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: async () => {
							await navigator.clipboard.writeText(s.host);
							toast.success("Copied");
						},
						children: "Copy"
					})]
				}, s.host))
			})
		]
	});
}
//#endregion
export { PlayPage as component };
