"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { format, addMonths, subMonths } from "date-fns"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CalendarWidget() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  // Sample events data - in a real app, this would come from an API
  const events = [
    { date: new Date(2025, 2, 15), type: "rehearsal" },
    { date: new Date(2025, 2, 17), type: "performance" },
    { date: new Date(2025, 2, 22), type: "rehearsal" },
    { date: new Date(2025, 2, 24), type: "performance" },
    { date: new Date(2025, 2, 29), type: "rehearsal" },
  ]

  // Generate days for the current month view
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  // Check if a day has an event
  const getDayEvent = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return events.find(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{format(currentMonth, "MMMM yyyy")}</h3>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-xs font-medium py-1">
            {day}
          </div>
        ))}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="h-10 rounded-md text-center"></div>
        ))}
        {days.map((day) => {
          const event = getDayEvent(day)
          return (
            <div
              key={`day-${day}`}
              className={cn(
                "h-10 rounded-md text-center flex items-center justify-center text-sm relative",
                event?.type === "rehearsal" && "bg-blue-100 dark:bg-blue-900/30",
                event?.type === "performance" && "bg-primary/20",
              )}
            >
              {day}
              {event && (
                <div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full absolute bottom-1",
                    event.type === "rehearsal" && "bg-blue-500",
                    event.type === "performance" && "bg-primary",
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center gap-6 mt-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span>Rehearsal</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span>Performance</span>
        </div>
      </div>
    </div>
  )
}

