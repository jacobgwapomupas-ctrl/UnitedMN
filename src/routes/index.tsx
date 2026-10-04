import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { HeroBanner } from "@/components/hero-banner";
import { CategoryIcon } from "@/components/category-icon";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlayerSkin } from "@/components/player-skin";
import { TICKET_CATEGORIES, searchHelp } from "@/lib/content";
import { usePlayerStore } from "@/lib/player-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [q, setQ] = useState("");
  const player = usePlayerStore((s) => s.player);
  const results = useMemo(() => searchHelp(q), [q]);
  const navigate = useNavigate();

  return (
    <main>
      <HeroBanner>
        <h1 className="font-display text-4xl text-fg glow-title sm:text-5xl">How can we help?</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
          Search the quick answers, or open a ticket and a helper will guide you.
        </p>
        <div className="relative mx-auto mt-6 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search help… e.g. punishment appeal, media rank, /whereami"
            className="h-12 rounded-lg border-border bg-bg/80 pl-10"
            aria-label="Search help"
          />
        </div>
        {q.trim() ? (
          <div className="mx-auto mt-4 max-w-xl rounded-lg border border-border bg-card/90 text-left">
            {results.length === 0 ? (
              <p className="px-4 py-3 text-sm text-muted">No articles match that search.</p>
            ) : (
              results.map((a) => (
                <Link
                  key={a.slug}
                  to="/help/$slug"
                  params={{ slug: a.slug }}
                  className="block border-b border-border px-4 py-3 last:border-0 hover:bg-elevated"
                >
                  <div className="text-sm font-medium text-fg">{a.title}</div>
                  <div className="truncate text-xs text-muted">{a.body}</div>
                </Link>
              ))
            )}
          </div>
        ) : null}
      </HeroBanner>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="font-display text-xl text-fg">Open a ticket</h2>
            <p className="text-sm text-muted">pick a category — a helper gathers what staff needs</p>
          </div>
          <Link to="/play" className="text-sm text-primary hover:underline">
            Server IPs
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TICKET_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                if (c.id === "staff") {
                  navigate({ to: "/apply" });
                  return;
                }
                if (!player) {
                  navigate({
                    to: "/login",
                    search: { next: `/tickets/new?cat=${c.id}` },
                  });
                  return;
                }
                navigate({ to: "/tickets/new", search: { cat: c.id } });
              }}
              className="rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/40 hover:bg-elevated"
            >
              <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-elevated">
                <CategoryIcon name={c.icon} />
              </div>
              <div className="font-medium">{c.title}</div>
              <p className="mt-1 text-sm text-muted">{c.blurb}</p>
              <span className="mt-3 inline-block text-sm text-primary">Start ticket →</span>
            </button>
          ))}
        </div>

        <Card className="mt-6 flex flex-col items-start gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {player ? (
              <PlayerSkin ign={player.ign} size={36} />
            ) : (
              <div className="flex size-9 items-center justify-center rounded-md bg-elevated">
                <PlayerSkin ign="Steve" size={28} />
              </div>
            )}
            <div>
              <div className="font-medium">
                {player ? "Ready to open a ticket" : "Log in to open a ticket"}
              </div>
              <p className="text-sm text-muted">
                {player
                  ? `Signed in as ${player.ign}. Track tickets from Profile.`
                  : "Sign in with your Minecraft username to start and track tickets."}
              </p>
            </div>
          </div>
          <Link to={player ? "/tickets" : "/login"}>
            <Button>{player ? "My tickets" : "Log in"}</Button>
          </Link>
        </Card>
      </div>
    </main>
  );
}
