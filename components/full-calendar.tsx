"use client"

import { useState } from "react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns"
import { cn } from "@/lib/utils"

type Event = {
  id: number
  title: string
  date: Date
  time: string
  location: string
  type: "rehearsal" | "performance" | "meeting" | "social"
  description?: string
}

export function FullCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  // Sample events data - in a real app, this would come from an API
  const events: Event[] = [
    {
      id: 1,
      title: "Weekly Rehearsal",
      date: new Date(2025, 2, 15),
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "rehearsal",
    },
    {
      id: 2,
      title: "Sunday Morning Service",
      date: new Date(2025, 2, 17),
      time: "10:30 AM - 12:00 PM",
      location: "Main Sanctuary",
      type: "performance",
    },
    {
      id: 3,
      title: "Sectional Practice - Sopranos & Altos",
      date: new Date(2025, 2, 19),
      time: "6:30 PM - 7:30 PM",
      location: "Choir Room",
      type: "rehearsal",
    },
    {
      id: 4,
      title: "Choir Board Meeting",
      date: new Date(2025, 2, 20),
      time: "6:00 PM - 7:00 PM",
      location: "Conference Room",
      type: "meeting",
    },
    {
      id: 5,
      title: "Weekly Rehearsal",
      date: new Date(2025, 2, 22),
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "rehearsal",
    },
    {
      id: 6,
      title: "Sunday Morning Service",
      date: new Date(2025, 2, 24),
      time: "10:30 AM - 12:00 PM",
      location: "Main Sanctuary",
      type: "performance",
    },
    {
      id: 7,
      title: "Choir Social Gathering",
      date: new Date(2025, 2, 27),
      time: "6:00 PM - 8:00 PM",
      location: "Fellowship Hall",
      type: "social",
    },
    {
      id: 8,
      title: "Weekly Rehearsal",
      date: new Date(2025, 2, 29),
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "rehearsal",
    },
  ]

  // Generate days for the current month view
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Get day names for header
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Get events for a specific day
  const getEventsForDay = (day: Date) => {
    return events.filter((event) => isSameDay(event.date, day))
  }

  // Get background color based on event type
  const getEventColor = (type: string) => {
    switch (type) {
      case "rehearsal":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "performance":
        return "bg-primary/20 text-primary-foreground"
      case "meeting":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "social":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="w-full p-2 md:p-4 overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="grid grid-cols-7 gap-px">
          {weekDays.map((day) => (
            <div key={day} className="text-center py-2 font-medium text-sm">
              <span className="md:hidden">{day.slice(0, 1)}</span>
              <span className="hidden md:inline">{day.slice(0, 3)}</span>
            </div>
          ))}

          {Array.from({ length: monthStart.getDay() }).map((_, index) => (
            <div key={`empty-start-${index}`} className="h-20 sm:h-24 md:h-28 lg:h-32 bg-muted/20 p-1" />
          ))}

          {days.map((day) => {
            const dayEvents = getEventsForDay(day)
            return (
              <div
                key={day.toString()}
                className={cn(
                  "h-20 sm:h-24 md:h-28 lg:h-32 border border-border p-1 overflow-hidden",
                  !isSameMonth(day, currentMonth) && "bg-muted/20 text-muted-foreground",
                  isToday(day) && "bg-primary/5",
                )}
              >
                <div className="flex justify-between items-start">
                  <span
                    className={cn(
                      "inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium",
                      isToday(day) && "bg-primary text-primary-foreground",
                    )}
                  >
                    {format(day, "d")}
                  </span>
                  {dayEvents.length > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {dayEvents.length} event{dayEvents.length > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
                <div className="mt-1 space-y-1 max-h-[calc(100%-1.5rem)] overflow-hidden">
                  {dayEvents.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      className={cn("text-xs px-1.5 py-0.5 rounded truncate cursor-pointer", getEventColor(event.type))}
                      title={event.title}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-muted-foreground px-1.5">+{dayEvents.length - 2} more</div>
                  )}
                </div>
              </div>
            )
          })}

          {Array.from({ length: 6 - monthEnd.getDay() }).map((_, index) => (
            <div key={`empty-end-${index}`} className="h-20 sm:h-24 md:h-28 lg:h-32 bg-muted/20 p-1" />
          ))}
        </div>
      </div>
    </div>
  )
}

