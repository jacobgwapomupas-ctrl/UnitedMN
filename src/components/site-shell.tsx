import { useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { usePlayerStore } from "@/lib/player-store";
import { useTicketStore } from "@/lib/ticket-store";
import { Button } from "./ui/button";
import { PlayerSkin } from "./player-skin";

export function SiteShell({ children }: { children: ReactNode }) {
  const player = usePlayerStore((s) => s.player);

  useEffect(() => {
    usePlayerStore.persist.rehydrate();
    Promise.resolve(useTicketStore.persist.rehydrate()).finally(() => {
      useTicketStore.getState().setHydrated();
    });
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt=""
              className="size-9 object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 8px rgb(62 224 122 / 0.7)) drop-shadow(0 0 4px rgb(239 68 68 / 0.35))",
              }}
            />
            <span className="font-display text-lg tracking-wide text-primary glow-title">
              UnitedMN
            </span>
          </Link>
          <Link to={player ? "/profile" : "/login"}>
            <Button variant="secondary" size="sm" className="gap-2">
              {player ? <PlayerSkin ign={player.ign} size={20} /> : null}
              {player ? player.ign : "Profile"}
            </Button>
          </Link>
        </div>
      </header>
      <div className="pixel-grass" aria-hidden="true" />
      {children}
    </div>
  );
}
