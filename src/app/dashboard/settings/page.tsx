import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Settings, User, Bell, Shield, LogOut } from "lucide-react";

export default async function SettingsPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <AppShell showSearch showSidebar sidebarDashboard>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Settings" },
          ]}
          className="mb-5"
        />

        <h1 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          Settings
        </h1>

        {/* Profile */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
            <User className="h-4 w-4 text-muted-foreground" />
            Profile
          </h2>
          <div className="rounded-md border border-border bg-card p-5 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Display name</Label>
              <Input
                id="name"
                defaultValue={session.user.name ?? ""}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                defaultValue={session.user.email ?? ""}
                disabled
              />
              <p className="text-xs text-muted-foreground">Email cannot be changed.</p>
            </div>
            <Button variant="default" size="sm">Save profile</Button>
          </div>
        </section>

        <Separator className="mb-8" />

        {/* Notifications */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
            <Bell className="h-4 w-4 text-muted-foreground" />
            Notifications
            <Badge variant="muted" className="text-[10px]">Coming soon</Badge>
          </h2>
          <div className="rounded-md border border-border/40 bg-muted/10 p-5">
            <p className="text-xs text-muted-foreground">
              Notification preferences and Discord webhook integrations will be available in a future update.
            </p>
          </div>
        </section>

        <Separator className="mb-8" />

        {/* Security */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-muted-foreground" />
            Security
          </h2>
          <div className="rounded-md border border-border bg-card p-5 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="new-password">New password</Label>
              <Input id="new-password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" />
            </div>
            <Button variant="default" size="sm">Update password</Button>
          </div>
        </section>

        <Separator className="mb-8" />

        {/* Danger zone */}
        <section>
          <h2 className="text-sm font-semibold text-destructive mb-4">Danger zone</h2>
          <div className="rounded-md border border-destructive/30 bg-destructive/5 p-5 space-y-3">
            <p className="text-xs text-muted-foreground">
              Signing out will end your session. Your data will remain saved.
            </p>
            <form action="/api/auth/signout" method="post">
              <Button variant="destructive" size="sm" type="submit" className="gap-1.5">
                <LogOut className="h-3.5 w-3.5" />
                Sign out
              </Button>
            </form>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
