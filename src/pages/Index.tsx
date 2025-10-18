import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Dashboard } from "@/components/Dashboard"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-auto">
          <header className="h-16 flex items-center border-b border-border/50 bg-background px-6 sticky top-0 z-10 backdrop-blur-sm bg-background/80">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold text-foreground tracking-tight">TelePro Dashboard</h2>
            </div>
          </header>
          
          <Dashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
