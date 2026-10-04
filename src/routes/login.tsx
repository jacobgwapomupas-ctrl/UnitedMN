import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlayerSkin } from "@/components/player-skin";
import { SERVER_IPS, isValidIgn } from "@/lib/content";
import { usePlayerStore } from "@/lib/player-store";
import { z } from "zod";

const searchSchema = z.object({
  next: z.string().optional(),
});

export const Route = createFileRoute("/login")({
  validateSearch: searchSchema,
  component: LoginPage,
});

function LoginPage() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const login = usePlayerStore((s) => s.login);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [ign, setIgn] = useState("");
  const [discord, setDiscord] = useState("");
  const [ip, setIp] = useState<string>(SERVER_IPS[0].host);

  function goAfter() {
    if (next?.startsWith("/tickets/new")) {
      const params = new URLSearchParams(next.split("?")[1] ?? "");
      void navigate({ to: "/tickets/new", search: { cat: params.get("cat") ?? "other" } });
      return;
    }
    if (next === "/apply") {
      void navigate({ to: "/apply" });
      return;
    }
    if (next === "/tickets") {
      void navigate({ to: "/tickets" });
      return;
    }
    void navigate({ to: "/" });
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!isValidIgn(ign)) {
      toast.error("Use a valid Minecraft name (3–16 letters, numbers, underscore).");
      return;
    }
    login({
      ign: ign.trim(),
      discord: discord.trim(),
      ip,
      createdAt: Date.now(),
    });
    toast.success(mode === "register" ? "Account ready" : `Welcome, ${ign.trim()}`);
    goAfter();
  }

  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <h1 className="font-display text-3xl glow-title">Account</h1>
      <p className="mt-2 text-sm text-muted">
        No password. Sign in with your Minecraft username — same as in-game.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-1 rounded-lg border border-border bg-surface p-1">
        <button
          type="button"
          className={`h-10 rounded-md text-sm ${mode === "login" ? "bg-elevated text-primary" : "text-muted"}`}
          onClick={() => setMode("login")}
        >
          Login
        </button>
        <button
          type="button"
          className={`h-10 rounded-md text-sm ${mode === "register" ? "bg-elevated text-primary" : "text-muted"}`}
          onClick={() => setMode("register")}
        >
          Register
        </button>
      </div>

      <Card className="mt-4 p-5">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <Label htmlFor="ign">Minecraft username</Label>
            <Input
              id="ign"
              value={ign}
              onChange={(e) => setIgn(e.target.value)}
              placeholder="Swaxtu"
              autoComplete="username"
              required
            />
          </div>

          {ign.trim().length >= 3 ? (
            <div className="flex items-center gap-3 rounded-md border border-border bg-bg p-3">
              <PlayerSkin ign={ign.trim()} size={48} />
              <div>
                <div className="text-sm font-medium">{ign.trim()}</div>
                <div className="text-xs text-muted">Face skin preview</div>
              </div>
            </div>
          ) : null}

          {mode === "register" ? (
            <>
              <div>
                <Label htmlFor="discord">Discord</Label>
                <Input
                  id="discord"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  placeholder="swaxtu"
                />
              </div>
              <div>
                <Label htmlFor="ip">Preferred server IP</Label>
                <select
                  id="ip"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  className="flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
                >
                  {SERVER_IPS.map((s) => (
                    <option key={s.host} value={s.host}>
                      {s.label} — {s.host}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : null}

          <Button type="submit" className="w-full">
            {mode === "register" ? "Create account" : "Log in"}
          </Button>
        </form>
      </Card>
    </main>
  );
}
