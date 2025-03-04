import { MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function EventList() {
  // Sample events data - in a real app, this would come from an API
  const events = [
    {
      id: 1,
      title: "Weekly Rehearsal",
      date: "Mar 15, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "rehearsal",
      description: "Regular weekly rehearsal focusing on Easter music selections.",
    },
    {
      id: 2,
      title: "Sunday Morning Service",
      date: "Mar 17, 2025",
      time: "10:30 AM - 12:00 PM",
      location: "Main Sanctuary",
      type: "performance",
      description: "Regular Sunday service. Arrive by 9:45 AM for warm-up.",
    },
    {
      id: 3,
      title: "Sectional Practice - Sopranos & Altos",
      date: "Mar 19, 2025",
      time: "6:30 PM - 7:30 PM",
      location: "Choir Room",
      type: "rehearsal",
      description: "Focused practice on the challenging sections of 'Hallelujah Chorus'.",
    },
    {
      id: 4,
      title: "Choir Board Meeting",
      date: "Mar 20, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "Conference Room",
      type: "meeting",
      description: "Monthly board meeting to discuss upcoming events and budget.",
    },
    {
      id: 5,
      title: "Weekly Rehearsal",
      date: "Mar 22, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "rehearsal",
      description: "Regular weekly rehearsal. Focus on Easter cantata.",
    },
    {
      id: 6,
      title: "Sunday Morning Service",
      date: "Mar 24, 2025",
      time: "10:30 AM - 12:00 PM",
      location: "Main Sanctuary",
      type: "performance",
      description: "Regular Sunday service. Arrive by 9:45 AM for warm-up.",
    },
    {
      id: 7,
      title: "Choir Social Gathering",
      date: "Mar 27, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Fellowship Hall",
      type: "social",
      description: "Potluck dinner and fellowship. Bring your favorite dish to share!",
    },
    {
      id: 8,
      title: "Weekly Rehearsal",
      date: "Mar 29, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "rehearsal",
      description: "Final rehearsal before Easter Sunday.",
    },
  ]

  // Get badge color based on event type
  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "rehearsal":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "performance":
        return "bg-primary/20 text-primary"
      case "meeting":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "social":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <div key={event.id} className="flex flex-col sm:flex-row gap-4 rounded-lg border p-4">
          <div className="sm:w-48 flex-shrink-0">
            <div className="text-lg font-semibold mb-1">{event.date}</div>
            <div className="text-sm text-muted-foreground">{event.time}</div>
            <Badge className={cn("mt-2", getEventBadgeColor(event.type))}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
          </div>

          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.description}</p>

            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              <span>{event.location}</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Button size="sm" variant="outline">
                Edit
              </Button>
              <Button size="sm" variant="outline">
                Delete
              </Button>
              <Button size="sm" variant="outline">
                RSVP
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

