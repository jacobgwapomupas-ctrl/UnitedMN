import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TICKET_CATEGORIES, categoryById, type TicketCategoryId } from "@/lib/content";
import { usePlayerStore } from "@/lib/player-store";
import { uid, useTicketStore } from "@/lib/ticket-store";

const searchSchema = z.object({
  cat: z.string().optional(),
});

export const Route = createFileRoute("/tickets/new")({
  validateSearch: searchSchema,
  component: NewTicketPage,
});

function NewTicketPage() {
  const { cat } = Route.useSearch();
  const player = usePlayerStore((s) => s.player);
  const addTicket = useTicketStore((s) => s.addTicket);
  const addMessage = useTicketStore((s) => s.addMessage);
  const setStatus = useTicketStore((s) => s.setStatus);
  const navigate = useNavigate();
  const initial = (categoryById(cat ?? "")?.id ?? "other") as TicketCategoryId;
  const [category, setCategory] = useState<TicketCategoryId>(initial);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  if (!player) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-3xl">Open a ticket</h1>
        <p className="mt-2 text-sm text-muted">Sign in with your Minecraft username first.</p>
        <Link
          to="/login"
          search={{ next: `/tickets/new?cat=${initial}` }}
          className="mt-6 inline-block"
        >
          <Button>Log in</Button>
        </Link>
      </main>
    );
  }

  const playerIgn = player.ign;

  function submit(e: FormEvent) {
    e.preventDefault();
    const id = uid();
    addTicket({
      id,
      ign: playerIgn,
      category,
      subject: subject.trim() || categoryById(category)?.title || "Ticket",
      status: "open",
      createdAt: Date.now(),
      messages: [
        {
          id: uid(),
          author: "player",
          name: playerIgn,
          body: body.trim(),
          at: Date.now(),
        },
      ],
    });
    toast.success("Ticket opened");
    void navigate({ to: "/tickets/$id", params: { id } });
    window.setTimeout(() => {
      addMessage(id, {
        id: uid(),
        author: "helper",
        name: "UnitedMN Helper",
        body: "Got it — a helper will gather what staff needs. Keep an eye on this ticket.",
        at: Date.now(),
      });
      setStatus(id, "waiting");
    }, 900);
  }

  return (
    <main className="mx-auto max-w-lg px-4 py-10">
      <h1 className="font-display text-3xl glow-title">Open a ticket</h1>
      <p className="mt-2 text-sm text-muted">Tell us what happened. Be specific.</p>
      <Card className="mt-6 p-5">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <Label>Category</Label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as TicketCategoryId)}
              className="flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
            >
              {TICKET_CATEGORIES.filter((c) => c.id !== "staff").map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label>Subject</Label>
            <Input value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          <div>
            <Label>Details</Label>
            <Textarea value={body} onChange={(e) => setBody(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">
            Submit ticket
          </Button>
        </form>
      </Card>
    </main>
  );
}
