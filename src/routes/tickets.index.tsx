import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { categoryById } from "@/lib/content";
import { usePlayerStore } from "@/lib/player-store";
import { useTicketStore } from "@/lib/ticket-store";

export const Route = createFileRoute("/tickets/")({ component: TicketsPage });

function TicketsPage() {
  const player = usePlayerStore((s) => s.player);
  const tickets = useTicketStore((s) => s.tickets);

  if (!player) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-3xl">Tickets</h1>
        <p className="mt-2 text-sm text-muted">Log in to view and open tickets.</p>
        <Link to="/login" search={{ next: "/tickets" }} className="mt-6 inline-block">
          <Button>Log in</Button>
        </Link>
      </main>
    );
  }

  const mine = tickets.filter((t) => t.ign.toLowerCase() === player.ign.toLowerCase());

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl glow-title">My tickets</h1>
        <Link to="/tickets/new" search={{ cat: "other" }}>
          <Button size="sm">New</Button>
        </Link>
      </div>
      <div className="mt-5 space-y-2">
        {mine.length === 0 ? (
          <p className="text-sm text-muted">No tickets yet. Open one from the help desk.</p>
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
    </main>
  );
}
