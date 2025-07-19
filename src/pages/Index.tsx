import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Dashboard } from "@/components/Dashboard"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1">
          <header className="h-14 flex items-center border-b border-border bg-card px-4">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center gap-4">
              <h2 className="font-semibold text-foreground">TelePro Dashboard</h2>
            </div>
          </header>
          
          <Dashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
