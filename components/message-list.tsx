import { formatDistanceToNow } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MessageList() {
  // Sample messages data - in a real app, this would come from an API
  const messages = [
    {
      id: 1,
      sender: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        section: "Soprano",
        initials: "SJ",
      },
      preview: "Hi John, just wanted to check if you received the new music sheets for Sunday's performance?",
      timestamp: new Date(2025, 2, 15, 14, 30),
      unread: true,
      online: true,
    },
    {
      id: 2,
      sender: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        section: "Bass",
        initials: "MB",
      },
      preview: "Can you send me the recording from last week's rehearsal? I want to practice the second verse.",
      timestamp: new Date(2025, 2, 14, 9, 15),
      unread: true,
      online: false,
    },
    {
      id: 3,
      sender: {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=40&width=40",
        section: "Alto",
        initials: "ED",
      },
      preview: "Just a reminder that we have an extra rehearsal this Thursday at 6:30 PM.",
      timestamp: new Date(2025, 2, 13, 18, 45),
      unread: true,
      online: true,
    },
    {
      id: 4,
      sender: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        section: "Bass",
        initials: "DW",
      },
      preview: "Thanks for helping with the setup yesterday. Everything went smoothly!",
      timestamp: new Date(2025, 2, 12, 11, 20),
      unread: false,
      online: false,
    },
    {
      id: 5,
      sender: {
        name: "Jennifer Lee",
        avatar: "/placeholder.svg?height=40&width=40",
        section: "Soprano",
        initials: "JL",
      },
      preview: "Do you have the sheet music for 'Amazing Grace'? I seem to have misplaced mine.",
      timestamp: new Date(2025, 2, 10, 15, 10),
      unread: false,
      online: true,
    },
  ]

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn("flex items-start gap-4 rounded-lg border p-4", message.unread && "bg-muted/40")}
        >
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
              <AvatarFallback>{message.sender.initials}</AvatarFallback>
            </Avatar>
            {message.online && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
            )}
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{message.sender.name}</h4>
                <Badge variant="outline" className="text-xs">
                  {message.sender.section}
                </Badge>
                {message.unread && <Badge className="h-2 w-2 rounded-full p-0" />}
              </div>
              <span className="text-xs text-muted-foreground">
                {formatDistanceToNow(message.timestamp, { addSuffix: true })}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{message.preview}</p>
            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="default">
                Reply
              </Button>
              {message.unread && (
                <Button size="sm" variant="outline">
                  Mark as Read
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

