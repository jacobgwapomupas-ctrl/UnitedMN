import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePlayerStore } from "@/lib/player-store";
import { uid, useTicketStore } from "@/lib/ticket-store";

export const Route = createFileRoute("/apply")({ component: ApplyPage });

function ApplyPage() {
  const player = usePlayerStore((s) => s.player);
  const addApp = useTicketStore((s) => s.addApp);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    ign: player?.ign ?? "",
    discord: player?.discord ?? "",
    age: "",
    timezone: "UTC+0 gmt",
    role: "moderator",
    why: "",
    experience: "",
  });

  if (!player) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-3xl">Staff application</h1>
        <p className="mt-2 text-sm text-muted">Log in with your Minecraft username first.</p>
        <Link to="/login" search={{ next: "/apply" }} className="mt-6 inline-block">
          <Button>Log in</Button>
        </Link>
      </main>
    );
  }

  const ignFallback = player.ign;

  function submit(e: FormEvent) {
    e.preventDefault();
    addApp({
      id: uid(),
      ign: form.ign || ignFallback,
      discord: form.discord,
      age: form.age,
      timezone: form.timezone,
      role: form.role,
      why: form.why,
      experience: form.experience,
      createdAt: Date.now(),
    });
    setSent(true);
    toast.success("Application sent");
  }

  if (sent) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-3xl glow-title">Application received</h1>
        <p className="mt-2 text-sm text-muted">We will review it and follow up in Discord.</p>
        <Link to="/profile" className="mt-6 inline-block">
          <Button>Back to profile</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-lg px-4 py-10">
      <h1 className="font-display text-3xl glow-title">Staff application</h1>
      <p className="mt-2 text-sm text-muted">Keep it honest. We read every application.</p>
      <Card className="mt-6 p-5">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <Label>Minecraft IGN</Label>
            <Input value={form.ign} onChange={(e) => setForm({ ...form, ign: e.target.value })} required />
          </div>
          <div>
            <Label>Discord</Label>
            <Input
              value={form.discord}
              onChange={(e) => setForm({ ...form, discord: e.target.value })}
              placeholder="swaxtu"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Age</Label>
              <Input
                type="number"
                min={13}
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                required
              />
            </div>
            <div>
              <Label>Role</Label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
              >
                <option value="moderator">Moderator</option>
                <option value="helper">Helper</option>
                <option value="builder">Builder</option>
                <option value="event">Event manager</option>
              </select>
            </div>
          </div>
          <div>
            <Label>Why join staff?</Label>
            <Textarea
              value={form.why}
              onChange={(e) => setForm({ ...form, why: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Past experience</Label>
            <Textarea
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">
            Send application
          </Button>
        </form>
      </Card>
    </main>
  );
}
