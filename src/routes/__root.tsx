import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "UnitedMN";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#0b100c" },
      {
        name: "description",
        content: "UnitedMN help desk — tickets, staff applications, and server support.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Pixelify+Sans:wght@500;600;700&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
          <Toaster
            theme="dark"
            toastOptions={{
              style: {
                background: "#141c15",
                border: "1px solid #243226",
                color: "#e8f3e8",
              },
            }}
          />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});

function NotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-16 text-center">
      <h1 className="font-display text-3xl">Page not found</h1>
      <p className="mt-2 text-sm text-muted">That link does not exist on UnitedMN.</p>
      <Link to="/" className="mt-6 inline-block">
        <Button>Back to help</Button>
      </Link>
    </main>
  );
}
