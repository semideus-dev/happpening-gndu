import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-zinc-100 p-2 flex-1">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
