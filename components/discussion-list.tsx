import { formatDistanceToNow } from "date-fns"
import { MessageSquare, Users } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DiscussionList() {
  // Sample discussions data - in a real app, this would come from an API
  const discussions = [
    {
      id: 1,
      title: "Easter Service Music Selection",
      category: "Repertoire",
      creator: {
        name: "Robert Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "RJ",
        role: "Music Director",
      },
      lastActivity: new Date(2025, 2, 15, 14, 30),
      replies: 12,
      participants: 8,
      unread: true,
      pinned: true,
      preview: "I'd like to discuss our music selections for the upcoming Easter service. I'm thinking of including...",
    },
    {
      id: 2,
      title: "Summer Concert Planning",
      category: "Events",
      creator: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SM",
        role: "Choir President",
      },
      lastActivity: new Date(2025, 2, 14, 9, 15),
      replies: 8,
      participants: 5,
      unread: true,
      pinned: true,
      preview: "Let's start planning our summer concert. I'm open to suggestions for themes and venue options...",
    },
    {
      id: 3,
      title: "New Member Welcome",
      category: "Community",
      creator: {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ED",
        role: "Alto Section Leader",
      },
      lastActivity: new Date(2025, 2, 12, 11, 20),
      replies: 5,
      participants: 10,
      unread: false,
      pinned: false,
      preview: "We have three new members joining the choir this month. Let's use this thread to welcome them and...",
    },
    {
      id: 4,
      title: "Rehearsal Technique Discussion",
      category: "Technique",
      creator: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MB",
        role: "Bass Section Leader",
      },
      lastActivity: new Date(2025, 2, 10, 15, 10),
      replies: 15,
      participants: 12,
      unread: false,
      pinned: false,
      preview: "I'd like to share some vocal warm-up techniques that have been working well for the bass section...",
    },
    {
      id: 5,
      title: "Choir Robe Fundraising Ideas",
      category: "Fundraising",
      creator: {
        name: "Jennifer Lee",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JL",
        role: "Treasurer",
      },
      lastActivity: new Date(2025, 2, 8, 16, 45),
      replies: 10,
      participants: 7,
      unread: false,
      pinned: false,
      preview: "We need to raise funds for new choir robes. I'm looking for creative fundraising ideas that we can...",
    },
  ]

  return (
    <div className="space-y-4">
      {discussions.map((discussion) => (
        <div
          key={discussion.id}
          className={cn("flex flex-col sm:flex-row gap-4 rounded-lg border p-4", discussion.unread && "bg-muted/40")}
        >
          <div className="sm:w-48 flex-shrink-0 space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={discussion.creator.avatar} alt={discussion.creator.name} />
                <AvatarFallback>{discussion.creator.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{discussion.creator.name}</div>
                <div className="text-xs text-muted-foreground">{discussion.creator.role}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{discussion.category}</Badge>
              {discussion.pinned && <Badge variant="secondary">Pinned</Badge>}
              {discussion.unread && <Badge>New</Badge>}
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <h4 className="font-medium">{discussion.title}</h4>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                {formatDistanceToNow(discussion.lastActivity, { addSuffix: true })}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{discussion.preview}</p>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  <span>{discussion.replies} replies</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{discussion.participants} participants</span>
                </div>
              </div>
              <Button size="sm">View Discussion</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

