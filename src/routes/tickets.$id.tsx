import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { PlayerSkin } from "@/components/player-skin";
import { categoryById } from "@/lib/content";
import { usePlayerStore } from "@/lib/player-store";
import { uid, useTicketStore } from "@/lib/ticket-store";

export const Route = createFileRoute("/tickets/$id")({ component: TicketDetail });

function TicketDetail() {
  const { id } = Route.useParams();
  const player = usePlayerStore((s) => s.player);
  const hydrated = useTicketStore((s) => s.hydrated);
  const ticket = useTicketStore((s) => s.tickets.find((t) => t.id === id));
  const addMessage = useTicketStore((s) => s.addMessage);
  const setStatus = useTicketStore((s) => s.setStatus);
  const [body, setBody] = useState("");

  if (!hydrated) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16 text-sm text-muted">Loading ticket…</main>
    );
  }
  if (!ticket) throw notFound();
  const current = ticket;

  function send(e: FormEvent) {
    e.preventDefault();
    if (!body.trim() || !player) return;
    addMessage(current.id, {
      id: uid(),
      author: "player",
      name: player.ign,
      body: body.trim(),
      at: Date.now(),
    });
    setBody("");
    window.setTimeout(() => {
      addMessage(current.id, {
        id: uid(),
        author: "helper",
        name: "UnitedMN Helper",
        body: "Noted. We'll keep this ticket updated.",
        at: Date.now(),
      });
    }, 700);
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link to="/tickets" className="text-sm text-muted hover:text-primary">
        ← Tickets
      </Link>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl glow-title">{current.subject}</h1>
          <p className="text-sm text-muted">{categoryById(current.category)?.title}</p>
        </div>
        <Badge>{current.status}</Badge>
      </div>

      <div className="mt-6 space-y-3">
        {current.messages.map((m) => (
          <Card key={m.id} className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <PlayerSkin ign={m.author === "helper" ? "Notch" : m.name} size={24} />
              <span className="text-sm font-medium">{m.name}</span>
              <span className="text-xs text-subtle">
                {new Date(m.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
            <p className="text-sm text-muted">{m.body}</p>
          </Card>
        ))}
      </div>

      {player ? (
        <form onSubmit={send} className="mt-5 space-y-3">
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Reply…"
          />
          <div className="flex gap-2">
            <Button type="submit">Send</Button>
            {current.status !== "closed" ? (
              <Button type="button" variant="secondary" onClick={() => setStatus(current.id, "closed")}>
                Close ticket
              </Button>
            ) : null}
          </div>
        </form>
      ) : null}
    </main>
  );
}
