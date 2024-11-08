import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../AppSidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="w-full flex items-center justify-between px-2 py-5 shadow">
          <SidebarTrigger />

          <div>
            <input type="text" />
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
