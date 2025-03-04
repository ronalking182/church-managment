import { Download, FileMusic, Play, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MusicGrid() {
  // Sample music data - in a real app, this would come from an API
  const musicItems = [
    {
      id: 1,
      title: "Amazing Grace",
      composer: "John Newton, arr. by John Smith",
      category: "Hymn",
      voiceParts: ["SATB"],
      difficulty: 2,
      dateAdded: "Mar 1, 2025",
      hasSheet: true,
      hasAudio: true,
      hasMidi: true,
      hasVideo: false,
      status: "new",
    },
    {
      id: 2,
      title: "How Great Thou Art",
      composer: "Stuart K. Hine",
      category: "Hymn",
      voiceParts: ["SATB"],
      difficulty: 3,
      dateAdded: "Feb 28, 2025",
      hasSheet: true,
      hasAudio: true,
      hasMidi: true,
      hasVideo: true,
      status: "updated",
    },
    {
      id: 3,
      title: "Hallelujah Chorus",
      composer: "G.F. Handel",
      category: "Classical",
      voiceParts: ["SATB"],
      difficulty: 4,
      dateAdded: "Feb 25, 2025",
      hasSheet: true,
      hasAudio: false,
      hasMidi: true,
      hasVideo: false,
      status: "new",
    },
    {
      id: 4,
      title: "10,000 Reasons",
      composer: "Matt Redman",
      category: "Contemporary",
      voiceParts: ["SAB"],
      difficulty: 2,
      dateAdded: "Feb 20, 2025",
      hasSheet: true,
      hasAudio: true,
      hasMidi: false,
      hasVideo: true,
      status: "",
    },
    {
      id: 5,
      title: "It Is Well With My Soul",
      composer: "Horatio Spafford",
      category: "Hymn",
      voiceParts: ["SATB"],
      difficulty: 3,
      dateAdded: "Feb 18, 2025",
      hasSheet: true,
      hasAudio: true,
      hasMidi: true,
      hasVideo: false,
      status: "",
    },
    {
      id: 6,
      title: "Bless the Lord, O My Soul",
      composer: "Andraé Crouch",
      category: "Gospel",
      voiceParts: ["SATB"],
      difficulty: 3,
      dateAdded: "Feb 15, 2025",
      hasSheet: true,
      hasAudio: true,
      hasMidi: false,
      hasVideo: false,
      status: "",
    },
    {
      id: 7,
      title: "Holy, Holy, Holy",
      composer: "John Bacchus Dykes",
      category: "Hymn",
      voiceParts: ["SATB"],
      difficulty: 2,
      dateAdded: "Feb 10, 2025",
      hasSheet: true,
      hasAudio: true,
      hasMidi: true,
      hasVideo: false,
      status: "",
    },
    {
      id: 8,
      title: "Great Is Thy Faithfulness",
      composer: "Thomas O. Chisholm",
      category: "Hymn",
      voiceParts: ["SATB"],
      difficulty: 3,
      dateAdded: "Feb 5, 2025",
      hasSheet: true,
      hasAudio: true,
      hasMidi: true,
      hasVideo: true,
      status: "",
    },
  ]

  // Get difficulty label
  const getDifficultyLabel = (level: number) => {
    switch (level) {
      case 1:
        return "Beginner"
      case 2:
        return "Easy"
      case 3:
        return "Intermediate"
      case 4:
        return "Advanced"
      case 5:
        return "Expert"
      default:
        return "Intermediate"
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {musicItems.map((music) => (
        <Card key={music.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg truncate" title={music.title}>
                {music.title}
              </CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>Add to Favorites</DropdownMenuItem>
                  <DropdownMenuItem>Download All Files</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="text-sm text-muted-foreground truncate">{music.composer}</div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline">{music.category}</Badge>
              {music.voiceParts.map((part) => (
                <Badge key={part} variant="outline">
                  {part}
                </Badge>
              ))}
              <Badge variant="outline">{getDifficultyLabel(music.difficulty)}</Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <span className="truncate">Added: {music.dateAdded}</span>
              {music.status && (
                <Badge className="ml-2" variant={music.status === "new" ? "default" : "secondary"}>
                  {music.status}
                </Badge>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-2">
            <div className="flex gap-1">
              {music.hasSheet && (
                <Button variant="outline" size="icon" className="h-8 w-8" title="Download Sheet Music">
                  <Download className="h-4 w-4" />
                </Button>
              )}
              {music.hasAudio && (
                <Button variant="outline" size="icon" className="h-8 w-8" title="Play Audio">
                  <Play className="h-4 w-4" />
                </Button>
              )}
              {music.hasMidi && (
                <Button variant="outline" size="icon" className="h-8 w-8" title="Download MIDI">
                  <FileMusic className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Button size="sm">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

