import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Code2, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "API Docs",
  description: "ClogLog developer API documentation.",
};

const ENDPOINTS = [
  { method: "GET", path: "/api/players/search", desc: "Search players by username", auth: false },
  { method: "GET", path: "/api/players/:username", desc: "Get player profile", auth: false },
  { method: "POST", path: "/api/players/:username/sync", desc: "Trigger sync for a player", auth: false },
  { method: "GET", path: "/api/players/:username/collection-log", desc: "Get full collection log", auth: false },
  { method: "GET", path: "/api/items", desc: "List all collection log items", auth: false },
  { method: "GET", path: "/api/items/:id", desc: "Get item by ID", auth: false },
  { method: "GET", path: "/api/categories", desc: "List all categories", auth: false },
  { method: "GET", path: "/api/goals", desc: "List authenticated user's goals", auth: true },
  { method: "POST", path: "/api/goals", desc: "Create a new goal", auth: true },
  { method: "PATCH", path: "/api/goals/:id", desc: "Update a goal", auth: true },
  { method: "DELETE", path: "/api/goals/:id", desc: "Delete a goal", auth: true },
];

const METHOD_COLORS: Record<string, string> = {
  GET: "text-green-700 bg-green-100 font-mono",
  POST: "text-blue-400 bg-blue-900/30",
  PATCH: "text-amber-400 bg-amber-900/30",
  DELETE: "text-red-400 bg-red-900/30",
};

export default function DocsPage() {
  return (
    <AppShell showSearch>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "API Docs" }]}
          className="mb-6"
        />

        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold text-foreground">API Reference</h1>
          <Badge variant="warning">v1 Beta</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-8">
          REST API endpoints for integrating ClogLog data into your projects, Discord bots, or scripts.
        </p>

        {/* Base URL */}
        <div className="rounded-md border border-border bg-card/50 p-4 mb-6">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Base URL</p>
          <code className="text-sm text-primary font-mono">
            {process.env.NEXT_PUBLIC_APP_URL ?? "https://cloglog.app"}/api
          </code>
        </div>

        {/* Endpoints */}
        <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <Code2 className="h-4 w-4 text-primary" />
          Endpoints
        </h2>

        <div className="rounded-md border border-border overflow-hidden mb-8">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-muted-foreground">
                <th className="px-4 py-2.5 text-left font-semibold w-16">Method</th>
                <th className="px-4 py-2.5 text-left font-semibold">Path</th>
                <th className="px-4 py-2.5 text-left font-semibold hidden sm:table-cell">Description</th>
                <th className="px-4 py-2.5 text-center font-semibold w-16">Auth</th>
              </tr>
            </thead>
            <tbody>
              {ENDPOINTS.map((ep) => (
                <tr key={ep.path} className="border-b border-border/40 hover:bg-muted/10 transition-colors">
                  <td className="px-4 py-2.5">
                    <span className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold font-mono ${METHOD_COLORS[ep.method]}`}>
                      {ep.method}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <code className="text-foreground font-mono">{ep.path}</code>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden sm:table-cell">{ep.desc}</td>
                  <td className="px-4 py-2.5 text-center">
                    {ep.auth && <Lock className="h-3 w-3 text-amber-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rate limiting */}
        <h2 className="text-sm font-semibold text-foreground mb-2">Rate limiting</h2>
        <p className="text-xs text-muted-foreground mb-6">
          Public endpoints are limited to 30 requests per minute per IP. Sync endpoints are
          limited to 1 sync per player per 5 minutes. Headers <code className="text-primary">X-RateLimit-Remaining</code>{" "}
          and <code className="text-primary">X-RateLimit-Reset</code> are returned on all responses.
        </p>

        {/* Response format */}
        <h2 className="text-sm font-semibold text-foreground mb-2">Response format</h2>
        <div className="rounded-md border border-border bg-card/50 p-4">
          <pre className="text-xs text-foreground font-mono overflow-x-auto">{`{
  "success": true,
  "data": { ... },
  "meta": { "page": 1, "pageSize": 50, "total": 1477 }
}

// Error response:
{
  "success": false,
  "error": "Player not found",
  "code": "NOT_FOUND"
}`}</pre>
        </div>
      </div>
    </AppShell>
  );
}
