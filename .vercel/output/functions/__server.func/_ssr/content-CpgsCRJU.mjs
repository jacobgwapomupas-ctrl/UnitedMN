import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DvQFlzU5.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors transition-transform duration-[var(--motion-quick)] ease-[var(--ease-out)] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-[0_0_18px_var(--color-glow)] hover:bg-primary-hover",
			secondary: "bg-surface text-fg border border-border hover:border-primary/40 hover:bg-elevated",
			ghost: "text-muted hover:text-fg hover:bg-elevated",
			link: "text-primary hover:underline underline-offset-4 p-0 h-auto"
		},
		size: {
			default: "h-11 px-4 text-sm",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-5 text-sm",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/content-CpgsCRJU.js
var SERVER_IPS = [
	{
		label: "Java / Bedrock",
		host: "play.unitedmn.net"
	},
	{
		label: "North America",
		host: "na.unitedmn.net"
	},
	{
		label: "Europe",
		host: "eu.unitedmn.net"
	},
	{
		label: "Direct NA",
		host: "172.65.234.91"
	},
	{
		label: "Direct EU",
		host: "51.89.142.203"
	}
];
var TICKET_CATEGORIES = [
	{
		id: "technical",
		title: "Technical support",
		blurb: "Crashes, lag, connection issues and bugs.",
		icon: "bug"
	},
	{
		id: "store",
		title: "Store & purchases",
		blurb: "Ranks, shards, missing items and billing.",
		icon: "image"
	},
	{
		id: "account",
		title: "Account & login",
		blurb: "Linking, logins and account access.",
		icon: "plug"
	},
	{
		id: "punishment",
		title: "Punishment appeal",
		blurb: "Appeal a ban, mute or other sanction.",
		icon: "hammer"
	},
	{
		id: "mapart",
		title: "Map art appeal",
		blurb: "Your map art was removed or blocked by mistake.",
		icon: "monitor"
	},
	{
		id: "media",
		title: "Media application",
		blurb: "Apply for the creator program and perks.",
		icon: "clapper"
	},
	{
		id: "staff",
		title: "Staff application",
		blurb: "Apply to join the UnitedMN staff team.",
		icon: "shield"
	},
	{
		id: "privacy",
		title: "Privacy & data",
		blurb: "Data requests, GDPR and account removal.",
		icon: "file"
	},
	{
		id: "other",
		title: "Other",
		blurb: "Anything that doesn't fit the categories above.",
		icon: "music"
	}
];
var HELP_ARTICLES = [
	{
		slug: "punishment-appeal",
		title: "How to appeal a punishment",
		tags: [
			"punishment appeal",
			"ban",
			"mute",
			"appeal"
		],
		body: "Open a Punishment appeal ticket with your Minecraft username, the date of the sanction, and why you believe it should be reviewed. Do not evade the punishment while we look at it. Staff will reply in the ticket."
	},
	{
		slug: "media-rank",
		title: "Media rank and creator perks",
		tags: [
			"media rank",
			"youtube",
			"tiktok",
			"creator"
		],
		body: "Creators with consistent UnitedMN content can apply under Media application. Include channel links, average views, and how you feature the server. Media rank is a perk, not a paid rank."
	},
	{
		slug: "whereami",
		title: "/whereami and getting unstuck",
		tags: [
			"/whereami",
			"stuck",
			"void",
			"nether"
		],
		body: "If you are stuck in a block, the void, or a claimed plot, run /whereami in-game and paste the coordinates into a Technical support ticket. Do not use cheats to escape."
	},
	{
		slug: "connection",
		title: "Can't connect to UnitedMN",
		tags: [
			"connection",
			"ip",
			"timeout",
			"lag"
		],
		body: "Try play.unitedmn.net first. If that fails, use the regional host (na.unitedmn.net or eu.unitedmn.net) listed on the Play page. Check you are on the right edition (Java 1.21+ / Bedrock latest)."
	},
	{
		slug: "store",
		title: "Missing store purchase",
		tags: [
			"store",
			"rank",
			"shards",
			"billing"
		],
		body: "Purchases usually apply within a few minutes. If a rank or item is missing, open Store & purchases with your transaction ID and IGN. Never share payment screenshots in public chat."
	},
	{
		slug: "linking",
		title: "Linking Java and Bedrock",
		tags: [
			"account",
			"link",
			"floodgate",
			"geyser"
		],
		body: "Use the same IGN where possible. If names collide, open Account & login and we will walk you through linking. Do not create duplicate tickets."
	}
];
function searchHelp(query) {
	const q = query.trim().toLowerCase();
	if (!q) return HELP_ARTICLES;
	return HELP_ARTICLES.filter((a) => {
		return `${a.title} ${a.tags.join(" ")} ${a.body}`.toLowerCase().includes(q);
	});
}
function categoryById(id) {
	return TICKET_CATEGORIES.find((c) => c.id === id);
}
function skinUrl(ign, size = 64) {
	return `https://mc-heads.net/avatar/${encodeURIComponent(ign)}/${size}`;
}
function isValidIgn(ign) {
	return /^[A-Za-z0-9_]{3,16}$/.test(ign.trim());
}
//#endregion
export { isValidIgn as a, Button as c, categoryById as i, cn as l, SERVER_IPS as n, searchHelp as o, TICKET_CATEGORIES as r, skinUrl as s, HELP_ARTICLES as t };
