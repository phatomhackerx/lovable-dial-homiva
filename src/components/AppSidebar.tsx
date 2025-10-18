import { useState } from "react"
import { 
  Phone, 
  BarChart3, 
  Users, 
  Target, 
  Trophy, 
  Settings,
  Home,
  PlayCircle
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Chamadas", url: "/calls", icon: Phone },
  { title: "Leads", url: "/leads", icon: Users },
  { title: "Campanhas", url: "/campaigns", icon: Target },
  { title: "Scripts", url: "/scripts", icon: PlayCircle },
  { title: "Relatórios", url: "/reports", icon: BarChart3 },
  { title: "Gamificação", url: "/gamification", icon: Trophy },
  { title: "Configurações", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-foreground text-background font-semibold" : "hover:bg-muted text-foreground"

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-72"}
      collapsible="icon"
    >
      <SidebarContent className="bg-background border-r border-border/50">
        {/* Logo */}
        <div className="px-6 py-8 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-background" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-xl font-bold text-foreground tracking-tight">TelePro</h2>
                <p className="text-xs text-muted-foreground mt-0.5">Sistema de Telemarketing</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-4 py-6">
          {!collapsed && (
            <SidebarGroupLabel className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-4 px-3">
              Menu Principal
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 px-4 rounded-full transition-all duration-200">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="ml-3 text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}