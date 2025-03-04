import { Download, FileMusic, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface RecentMusicProps {
  extended?: boolean
}

export function RecentMusic({ extended = false }: RecentMusicProps) {
  // Sample music data - in a real app, this would come from an API
  const musicItems = [
    {
      id: 1,
      title: "Amazing Grace",
      composer: "John Newton, arr. by John Smith",
      category: "Hymn",
      dateAdded: "Mar 1, 2025",
      hasSheet: true,
      hasAudio: true,
      status: "new",
    },
    {
      id: 2,
      title: "How Great Thou Art",
      composer: "Stuart K. Hine",
      category: "Worship",
      dateAdded: "Feb 28, 2025",
      hasSheet: true,
      hasAudio: true,
      status: "updated",
    },
    {
      id: 3,
      title: "Hallelujah Chorus",
      composer: "G.F. Handel",
      category: "Classical",
      dateAdded: "Feb 25, 2025",
      hasSheet: true,
      hasAudio: false,
      status: "new",
    },
    {
      id: 4,
      title: "10,000 Reasons",
      composer: "Matt Redman",
      category: "Contemporary",
      dateAdded: "Feb 20, 2025",
      hasSheet: true,
      hasAudio: true,
      status: "",
    },
    {
      id: 5,
      title: "It Is Well With My Soul",
      composer: "Horatio Spafford",
      category: "Hymn",
      dateAdded: "Feb 18, 2025",
      hasSheet: true,
      hasAudio: true,
      status: "",
    },
  ]

  const displayMusic = extended ? musicItems : musicItems.slice(0, 3)

  return (
    <div className="space-y-4">
      {displayMusic.map((music) => (
        <div key={music.id} className="flex items-start gap-4 rounded-lg border p-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
            <FileMusic className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{music.title}</h4>
              {music.status && (
                <Badge
                  className={cn(music.status === "new" && "bg-green-500", music.status === "updated" && "bg-blue-500")}
                >
                  {music.status}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{music.composer}</p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="outline">{music.category}</Badge>
              <div className="flex gap-1 ml-auto">
                {music.hasSheet && (
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <Download className="h-3.5 w-3.5" />
                  </Button>
                )}
                {music.hasAudio && (
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <Play className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {!extended && musicItems.length > 3 && (
        <div className="text-center">
          <a href="/music" className="text-sm text-primary hover:underline">
            View all music
          </a>
        </div>
      )}
    </div>
  )
}

