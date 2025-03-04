"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  Library,
  MessageSquare,
  Music,
  Settings,
  Users,
  Wallet,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Calendar",
      href: "/calendar",
      icon: Calendar,
    },
    {
      name: "Music Library",
      href: "/music",
      icon: Music,
    },
    {
      name: "Attendance",
      href: "/attendance",
      icon: Users,
    },
    {
      name: "Communication",
      href: "/communication",
      icon: MessageSquare,
    },
    {
      name: "Resources",
      href: "/resources",
      icon: Library,
    },
    {
      name: "Finance",
      href: "/finance",
      icon: Wallet,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <div
      className={cn(
        "relative flex h-screen flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className,
      )}
    >
      <div className="flex h-14 items-center border-b px-3 py-4">
        <Link href="/dashboard" className={cn("flex items-center gap-2 font-semibold", collapsed && "justify-center")}>
          <Music className="h-6 w-6 text-primary" />
          {!collapsed && <span className="truncate">Choir Portal</span>}
        </Link>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-16 z-10 h-6 w-6 rounded-full border bg-background p-0 shadow-md hidden md:flex"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </Button>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                collapsed && "justify-center px-0",
              )}
              title={collapsed ? item.name : undefined}
            >
              <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
              {!collapsed && <span className="truncate">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <div className={cn("flex items-center gap-3", collapsed && "flex-col justify-center")}>
          <div className="relative h-8 w-8 rounded-full bg-primary/20">
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-primary">
              JS
            </span>
          </div>
          {!collapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium truncate">John Smith</span>
              <span className="text-xs text-muted-foreground truncate">Tenor</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

