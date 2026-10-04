import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayerSkin } from "@/components/player-skin";
import { usePlayerStore } from "@/lib/player-store";
import { useTicketStore } from "@/lib/ticket-store";
import { categoryById } from "@/lib/content";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

function ProfilePage() {
  const player = usePlayerStore((s) => s.player);
  const logout = usePlayerStore((s) => s.logout);
  const tickets = useTicketStore((s) => s.tickets);
  const apps = useTicketStore((s) => s.apps);
  const navigate = useNavigate();

  if (!player) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-3xl">Profile</h1>
        <p className="mt-2 text-sm text-muted">Sign in with your Minecraft username to view this page.</p>
        <Link to="/login" className="mt-6 inline-block">
          <Button>Log in</Button>
        </Link>
      </main>
    );
  }

  const mine = tickets.filter((t) => t.ign.toLowerCase() === player.ign.toLowerCase());
  const myApps = apps.filter((a) => a.ign.toLowerCase() === player.ign.toLowerCase());

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
        <PlayerSkin ign={player.ign} size={72} className="rounded-md ring-2 ring-primary/40" />
        <div className="flex-1">
          <h1 className="font-display text-2xl glow-title">{player.ign}</h1>
          <p className="text-sm text-muted">
            {player.discord ? `Discord ${player.discord} · ` : ""}
            plays on {player.ip}
          </p>
        </div>
        <Button
          variant="secondary"
          onClick={() => {
            logout();
            navigate({ to: "/" });
          }}
        >
          Log out
        </Button>
      </Card>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="font-display text-xl">Tickets</h2>
        <Link to="/tickets/new" search={{ cat: "other" }}>
          <Button size="sm">New ticket</Button>
        </Link>
      </div>
      <div className="mt-3 space-y-2">
        {mine.length === 0 ? (
          <p className="text-sm text-muted">No tickets yet.</p>
        ) : (
          mine.map((t) => (
            <Link key={t.id} to="/tickets/$id" params={{ id: t.id }} className="block">
              <Card className="flex items-center justify-between p-4 hover:border-primary/40">
                <div>
                  <div className="font-medium">{t.subject}</div>
                  <div className="text-xs text-muted">{categoryById(t.category)?.title}</div>
                </div>
                <Badge>{t.status}</Badge>
              </Card>
            </Link>
          ))
        )}
      </div>

      <h2 className="mt-8 font-display text-xl">Staff applications</h2>
      <div className="mt-3 space-y-2">
        {myApps.length === 0 ? (
          <p className="text-sm text-muted">
            None yet.{" "}
            <Link to="/apply" className="text-primary hover:underline">
              Apply here
            </Link>
          </p>
        ) : (
          myApps.map((a) => (
            <Card key={a.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">{a.role}</div>
                <Badge>received</Badge>
              </div>
              <p className="mt-1 text-sm text-muted">{a.why}</p>
            </Card>
          ))
        )}
      </div>
    </main>
  );
}
