import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVER_IPS } from "@/lib/content";

export const Route = createFileRoute("/play")({ component: PlayPage });

function PlayPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="font-display text-3xl glow-title">Play UnitedMN</h1>
      <p className="mt-2 text-sm text-muted">
        Java 1.21+ and Bedrock latest. Copy an address and add it in Minecraft multiplayer.
      </p>
      <div className="mt-6 space-y-3">
        {SERVER_IPS.map((s) => (
          <Card key={s.host} className="flex items-center justify-between gap-3 p-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-muted">{s.label}</div>
              <div className="font-mono text-sm text-primary">{s.host}</div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(s.host);
                toast.success("Copied");
              }}
            >
              Copy
            </Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
