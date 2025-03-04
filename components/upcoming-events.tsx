import { Calendar, Clock, MapPin } from "lucide-react"
import { Music, Users } from "lucide-react"

export function UpcomingEvents() {
  // Sample events data - in a real app, this would come from an API
  const events = [
    {
      id: 1,
      title: "Weekly Rehearsal",
      date: "Mar 15, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "rehearsal",
    },
    {
      id: 2,
      title: "Sunday Morning Service",
      date: "Mar 17, 2025",
      time: "10:30 AM - 12:00 PM",
      location: "Main Sanctuary",
      type: "performance",
    },
    {
      id: 3,
      title: "Sectional Practice - Sopranos & Altos",
      date: "Mar 19, 2025",
      time: "6:30 PM - 7:30 PM",
      location: "Choir Room",
      type: "rehearsal",
    },
    {
      id: 4,
      title: "Weekly Rehearsal",
      date: "Mar 22, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      type: "rehearsal",
    },
    {
      id: 5,
      title: "Sunday Morning Service",
      date: "Mar 24, 2025",
      time: "10:30 AM - 12:00 PM",
      location: "Main Sanctuary",
      type: "performance",
    },
  ]

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex items-start gap-4 rounded-lg border p-3">
          <div
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
              event.type === "rehearsal"
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                : "bg-primary/20 text-primary"
            }`}
          >
            {event.type === "rehearsal" ? <Music className="h-5 w-5" /> : <Users className="h-5 w-5" />}
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="font-medium line-clamp-1">{event.title}</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3.5 w-3.5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3.5 w-3.5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

