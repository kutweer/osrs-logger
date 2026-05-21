import { Sidebar } from "@/components/sidebar";
import { TopNav } from "@/components/top-nav";
import { auth } from "@/lib/auth";

interface AppShellProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showSearch?: boolean;
  sidebarDashboard?: boolean;
}

export async function AppShell({
  children,
  showSidebar = false,
  showSearch = true,
  sidebarDashboard = false,
}: AppShellProps) {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav showSearch={showSearch} user={session?.user} />
      <div className="flex flex-1 overflow-hidden">
        {showSidebar && (
          <Sidebar
            className="hidden lg:flex"
            showDashboard={sidebarDashboard}
          />
        )}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
