"use client"

import { useEffect, useState } from "react"
import { Bell, ChevronRight, Eye, Music, Shield, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function SettingsSidebar() {
  const [activeSection, setActiveSection] = useState("profile")

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "notifications", "display", "account", "choir"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    {
      id: "profile",
      label: "Profile",
      icon: User,
      description: "Manage your personal information",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      description: "Configure how you receive notifications",
    },
    {
      id: "display",
      label: "Display",
      icon: Eye,
      description: "Customize your display preferences",
    },
    {
      id: "account",
      label: "Account",
      icon: Shield,
      description: "Manage your account settings",
    },
    {
      id: "choir",
      label: "Choir Settings",
      icon: Music,
      description: "Manage your choir-specific preferences",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="w-full md:w-64 md:flex-shrink-0">
      <div className="md:sticky md:top-20">
        <nav className="flex overflow-x-auto md:flex-col gap-1 pb-4 md:pb-0">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors whitespace-nowrap md:whitespace-normal",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                activeSection === item.id ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                "md:justify-between flex-shrink-0",
              )}
              onClick={() => scrollToSection(item.id)}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span>{item.label}</span>
              </div>
              <ChevronRight
                className={cn("hidden h-4 w-4 transition-transform md:block", activeSection === item.id && "rotate-90")}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

