import { i as __toESM } from "../_runtime.mjs";
import { X as require_jsx_runtime, Y as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button, o as searchHelp, r as TICKET_CATEGORIES } from "./content-CpgsCRJU.mjs";
import { a as Music2, c as Hammer, d as Bug, i as Search, l as FileText, o as Monitor, r as Shield, s as Image, t as Unplug, u as Clapperboard } from "../_libs/lucide-react.mjs";
import { l as usePlayerStore, o as PlayerSkin } from "./router-CX6a9QTT.mjs";
import { t as Card } from "./card-BZNRGR-w.mjs";
import { t as Input } from "./input-CmmkGiBy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BozcdWuT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroBanner({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero-sky relative overflow-hidden border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "star",
					style: {
						left: "8%",
						top: "18%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "star",
					style: {
						left: "18%",
						top: "32%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "star",
					style: {
						left: "28%",
						top: "12%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "star",
					style: {
						left: "42%",
						top: "22%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "star",
					style: {
						left: "58%",
						top: "14%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "star",
					style: {
						left: "88%",
						top: "20%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "star",
					style: {
						left: "70%",
						top: "38%"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trees, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-3xl px-4 py-14 text-center sm:py-20",
			children
		})]
	});
}
function Moon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute right-[14%] top-[18%] size-16 rounded-full bg-[#e8eee6] sm:size-20",
		style: { boxShadow: "0 0 24px 8px rgb(232 238 230 / 0.35), 0 0 60px 16px rgb(62 224 122 / 0.12)" }
	});
}
function Trees() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "absolute inset-x-0 bottom-0 h-28 w-full text-[#0e1a12] sm:h-36",
		viewBox: "0 0 800 160",
		preserveAspectRatio: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "0",
			y: "140",
			width: "800",
			height: "20",
			fill: "#0a140d"
		}), [
			40,
			90,
			150,
			210,
			280,
			340,
			420,
			500,
			560,
			630,
			700,
			760
		].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: `translate(${x} 0)`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "-4",
					y: "118",
					width: "8",
					height: "24",
					fill: "#1a2a1c"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: -18 - i % 3 * 2,
					y: 40 + i % 4 * 8,
					width: 36 + i % 3 * 6,
					height: 80,
					fill: i % 2 === 0 ? "#123018" : "#0f2814"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "-10",
					y: 28 + i % 4 * 8,
					width: "20",
					height: "20",
					fill: "#164020"
				})
			]
		}, x))]
	});
}
var MAP = {
	bug: Bug,
	image: Image,
	plug: Unplug,
	hammer: Hammer,
	monitor: Monitor,
	clapper: Clapperboard,
	shield: Shield,
	file: FileText,
	music: Music2
};
function CategoryIcon({ name }) {
	const Icon = MAP[name];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: "size-5 text-primary",
		strokeWidth: 1.8
	});
}
function Home() {
	const [q, setQ] = (0, import_react.useState)("");
	const player = usePlayerStore((s) => s.player);
	const results = (0, import_react.useMemo)(() => searchHelp(q), [q]);
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeroBanner, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl text-fg glow-title sm:text-5xl",
			children: "How can we help?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-3 max-w-lg text-sm text-muted",
			children: "Search the quick answers, or open a ticket and a helper will guide you."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto mt-6 max-w-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search help… e.g. punishment appeal, media rank, /whereami",
				className: "h-12 rounded-lg border-border bg-bg/80 pl-10",
				"aria-label": "Search help"
			})]
		}),
		q.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-4 max-w-xl rounded-lg border border-border bg-card/90 text-left",
			children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 py-3 text-sm text-muted",
				children: "No articles match that search."
			}) : results.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/help/$slug",
				params: { slug: a.slug },
				className: "block border-b border-border px-4 py-3 last:border-0 hover:bg-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium text-fg",
					children: a.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-xs text-muted",
					children: a.body
				})]
			}, a.slug))
		}) : null
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap items-end justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-fg",
					children: "Open a ticket"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "pick a category — a helper gathers what staff needs"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/play",
					className: "text-sm text-primary hover:underline",
					children: "Server IPs"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: TICKET_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						if (c.id === "staff") {
							navigate({ to: "/apply" });
							return;
						}
						if (!player) {
							navigate({
								to: "/login",
								search: { next: `/tickets/new?cat=${c.id}` }
							});
							return;
						}
						navigate({
							to: "/tickets/new",
							search: { cat: c.id }
						});
					},
					className: "rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/40 hover:bg-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 flex size-9 items-center justify-center rounded-md bg-elevated",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, { name: c.icon })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: c.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 inline-block text-sm text-primary",
							children: "Start ticket →"
						})
					]
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-6 flex flex-col items-start gap-3 p-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [player ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerSkin, {
						ign: player.ign,
						size: 36
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-9 items-center justify-center rounded-md bg-elevated",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerSkin, {
							ign: "Steve",
							size: 28
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: player ? "Ready to open a ticket" : "Log in to open a ticket"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: player ? `Signed in as ${player.ign}. Track tickets from Profile.` : "Sign in with your Minecraft username to start and track tickets."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: player ? "/tickets" : "/login",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: player ? "My tickets" : "Log in" })
				})]
			})
		]
	})] });
}
//#endregion
export { Home as component };
