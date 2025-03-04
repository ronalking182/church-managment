import { Calendar, Download, FileText, Link2, MoreHorizontal, Paperclip, Share2 } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

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

export function ResourceGrid() {
  // Sample resources data - in a real app, this would come from an API
  const resources = [
    {
      id: 1,
      title: "Choir Handbook 2025",
      type: "document",
      format: "PDF",
      size: "2.4 MB",
      category: "Administrative",
      folder: "Choir Documents",
      dateAdded: new Date(2025, 1, 15),
      addedBy: "Robert Johnson",
      description: "Comprehensive handbook for all choir members with policies and procedures.",
    },
    {
      id: 2,
      title: "Spring Concert Program",
      type: "document",
      format: "DOCX",
      size: "1.8 MB",
      category: "Events",
      folder: "Event Materials/Concert Programs",
      dateAdded: new Date(2025, 2, 5),
      addedBy: "Sarah Miller",
      description: "Program template for the upcoming spring concert.",
    },
    {
      id: 3,
      title: "Vocal Warm-up Exercises",
      type: "document",
      format: "PDF",
      size: "1.2 MB",
      category: "Educational",
      folder: "Educational Resources/Vocal Technique",
      dateAdded: new Date(2025, 2, 10),
      addedBy: "Michael Brown",
      description: "Collection of vocal warm-up exercises for choir rehearsals.",
    },
    {
      id: 4,
      title: "Budget Spreadsheet 2025",
      type: "document",
      format: "XLSX",
      size: "0.9 MB",
      category: "Administrative",
      folder: "Administrative/Budget Documents",
      dateAdded: new Date(2025, 1, 20),
      addedBy: "Jennifer Lee",
      description: "Annual budget spreadsheet for choir finances.",
    },
    {
      id: 5,
      title: "Sight Reading Resources",
      type: "link",
      url: "https://example.com/sight-reading",
      category: "Educational",
      folder: "Educational Resources/Sight Reading",
      dateAdded: new Date(2025, 2, 8),
      addedBy: "David Wilson",
      description: "External website with sight reading exercises and resources.",
    },
    {
      id: 6,
      title: "Member Directory Form",
      type: "document",
      format: "PDF",
      size: "0.5 MB",
      category: "Administrative",
      folder: "Templates/Forms",
      dateAdded: new Date(2025, 2, 12),
      addedBy: "Emily Davis",
      description: "Form for collecting member information for the directory.",
    },
    {
      id: 7,
      title: "Music Theory Basics",
      type: "document",
      format: "PDF",
      size: "3.2 MB",
      category: "Educational",
      folder: "Educational Resources/Music Theory",
      dateAdded: new Date(2025, 1, 25),
      addedBy: "Michael Brown",
      description: "Guide to basic music theory concepts for choir members.",
    },
    {
      id: 8,
      title: "Choir Photos - Winter Concert",
      type: "document",
      format: "ZIP",
      size: "45.6 MB",
      category: "Events",
      folder: "Event Materials/Photos and Videos",
      dateAdded: new Date(2025, 1, 10),
      addedBy: "Sarah Miller",
      description: "Collection of photos from the winter concert.",
    },
  ]

  // Get icon based on resource type and format
  const getResourceIcon = (resource: any) => {
    if (resource.type === "link") {
      return <Link2 className="h-6 w-6 text-blue-500" />
    }

    switch (resource.format) {
      case "PDF":
        return <FileText className="h-6 w-6 text-red-500" />
      case "DOCX":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "XLSX":
        return <FileText className="h-6 w-6 text-green-500" />
      case "ZIP":
        return <FileText className="h-6 w-6 text-yellow-500" />
      default:
        return <Paperclip className="h-6 w-6 text-muted-foreground" />
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {resources.map((resource) => (
        <Card key={resource.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 min-w-0">
                {getResourceIcon(resource)}
                <CardTitle className="text-lg truncate" title={resource.title}>
                  {resource.title}
                </CardTitle>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0 ml-1">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Download</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>Move</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-sm text-muted-foreground mb-2 line-clamp-2" title={resource.description}>
              {resource.description}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline">{resource.category}</Badge>
              {resource.type === "document" && <Badge variant="outline">{resource.format}</Badge>}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
              <span className="truncate">{formatDistanceToNow(resource.dateAdded, { addSuffix: true })}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-2">
            <div className="text-xs text-muted-foreground truncate">
              {resource.type === "document" ? resource.size : "External Link"}
            </div>
            <div className="flex gap-1 flex-shrink-0">
              {resource.type === "document" ? (
                <Button variant="outline" size="icon" className="h-8 w-8" title="Download">
                  <Download className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="outline" size="icon" className="h-8 w-8" title="Open Link">
                  <Link2 className="h-4 w-4" />
                </Button>
              )}
              <Button variant="outline" size="icon" className="h-8 w-8" title="Share">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

