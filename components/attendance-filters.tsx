"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export function AttendanceFilters() {
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([])
  const [selectedDateRanges, setSelectedDateRanges] = useState<string[]>([])

  const eventTypes = ["Rehearsals", "Performances", "Meetings", "Social Events"]

  const dateRanges = ["This Week", "This Month", "Last Month", "Last 3 Months", "Custom Range"]

  const toggleEventType = (type: string) => {
    if (selectedEventTypes.includes(type)) {
      setSelectedEventTypes(selectedEventTypes.filter((t) => t !== type))
    } else {
      setSelectedEventTypes([...selectedEventTypes, type])
    }
  }

  const toggleDateRange = (range: string) => {
    if (selectedDateRanges.includes(range)) {
      setSelectedDateRanges(selectedDateRanges.filter((r) => r !== range))
    } else {
      setSelectedDateRanges([...selectedDateRanges, range])
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Event Type</h3>
        <div className="flex flex-wrap gap-2">
          {eventTypes.map((type) => (
            <Badge
              key={type}
              variant="outline"
              className={cn("cursor-pointer", selectedEventTypes.includes(type) && "bg-primary/20 hover:bg-primary/30")}
              onClick={() => toggleEventType(type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Date Range</h3>
        <div className="flex flex-wrap gap-2">
          {dateRanges.map((range) => (
            <Badge
              key={range}
              variant="outline"
              className={cn(
                "cursor-pointer",
                selectedDateRanges.includes(range) && "bg-primary/20 hover:bg-primary/30",
              )}
              onClick={() => toggleDateRange(range)}
            >
              {range}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Choir Section</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="all-sections" defaultChecked />
            <label htmlFor="all-sections" className="text-sm">
              All Sections
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="soprano" />
            <label htmlFor="soprano" className="text-sm">
              Soprano
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="alto" />
            <label htmlFor="alto" className="text-sm">
              Alto
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="tenor" />
            <label htmlFor="tenor" className="text-sm">
              Tenor
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="bass" />
            <label htmlFor="bass" className="text-sm">
              Bass
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Attendance Status</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="all-status" defaultChecked />
            <label htmlFor="all-status" className="text-sm">
              All Status
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="completed" />
            <label htmlFor="completed" className="text-sm">
              Completed
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="pending" />
            <label htmlFor="pending" className="text-sm">
              Pending
            </label>
          </div>
        </div>
      </div>

      <Button variant="outline" className="w-full">
        Reset Filters
      </Button>
    </div>
  )
}

