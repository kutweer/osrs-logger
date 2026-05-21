"use client";

import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { GoalForm } from "@/components/goal-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { toast } from "sonner";

export default function NewGoalPage() {
  const router = useRouter();

  const handleSubmit = async (data: unknown) => {
    try {
      const res = await fetch("/api/goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json() as { success: boolean; error?: string };
      if (!json.success) throw new Error(json.error ?? "Failed to create goal");
      toast.success("Goal created!");
      router.push("/dashboard/goals");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <AppShell showSearch showSidebar sidebarDashboard>
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-6">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Goals", href: "/dashboard/goals" },
            { label: "New goal" },
          ]}
          className="mb-5"
        />

        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground">Create goal</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Track progress towards an item, boss, skill, or collection log milestone.
          </p>
        </div>

        <div className="rounded-md border border-border bg-card p-5">
          <GoalForm onSubmit={handleSubmit} />
        </div>
      </div>
    </AppShell>
  );
}
