import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AnnouncementsListProps {
  extended?: boolean
}

export function AnnouncementsList({ extended = false }: AnnouncementsListProps) {
  // Sample announcements data - in a real app, this would come from an API
  const announcements = [
    {
      id: 1,
      title: "Easter Service Rehearsal Schedule",
      content: "Additional rehearsals for Easter service will be held on Wednesday and Thursday evenings at 7 PM.",
      date: "Mar 1, 2025",
      priority: "high",
    },
    {
      id: 2,
      title: "New Music Folders Available",
      content: "Please pick up your new music folders from the choir room before Sunday's rehearsal.",
      date: "Feb 28, 2025",
      priority: "medium",
    },
    {
      id: 3,
      title: "Choir Robe Measurements",
      content: "We'll be taking measurements for new choir robes after this Sunday's service.",
      date: "Feb 25, 2025",
      priority: "medium",
    },
    {
      id: 4,
      title: "Spring Concert Date Announced",
      content: "Our annual Spring Concert will be held on May 15th at 7 PM. Please mark your calendars!",
      date: "Feb 20, 2025",
      priority: "high",
    },
    {
      id: 5,
      title: "Choir Social Gathering",
      content: "Join us for a potluck dinner on March 10th at 6 PM in the fellowship hall.",
      date: "Feb 18, 2025",
      priority: "low",
    },
  ]

  const displayAnnouncements = extended ? announcements : announcements.slice(0, 3)

  return (
    <div className="space-y-4">
      {displayAnnouncements.map((announcement) => (
        <div key={announcement.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{announcement.title}</h4>
            <Badge
              variant="outline"
              className={cn(
                announcement.priority === "high" && "border-red-500 text-red-500",
                announcement.priority === "medium" && "border-yellow-500 text-yellow-500",
                announcement.priority === "low" && "border-green-500 text-green-500",
              )}
            >
              {announcement.priority}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{announcement.content}</p>
          <div className="text-xs text-muted-foreground">{announcement.date}</div>
        </div>
      ))}
      {!extended && announcements.length > 3 && (
        <div className="text-center">
          <a href="/announcements" className="text-sm text-primary hover:underline">
            View all announcements
          </a>
        </div>
      )}
    </div>
  )
}

