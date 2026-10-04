import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { HELP_ARTICLES } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/help/$slug")({
  component: HelpArticlePage,
});

function HelpArticlePage() {
  const { slug } = Route.useParams();
  const article = HELP_ARTICLES.find((a) => a.slug === slug);
  if (!article) throw notFound();

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link to="/" className="text-sm text-muted hover:text-primary">
        ← Help
      </Link>
      <h1 className="mt-4 font-display text-3xl glow-title">{article.title}</h1>
      <Card className="mt-6 p-5 text-sm leading-relaxed text-muted">{article.body}</Card>
      <Link to="/tickets/new" search={{ cat: "other" }} className="mt-6 inline-block">
        <Button>Still need help? Open a ticket</Button>
      </Link>
    </main>
  );
}
