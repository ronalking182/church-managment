import { Download, FileText, Link2, MoreHorizontal, Paperclip } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ResourceTable() {
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
  ]

  // Get icon based on resource type and format
  const getResourceIcon = (resource: any) => {
    if (resource.type === "link") {
      return <Link2 className="h-5 w-5 text-blue-500" />
    }

    switch (resource.format) {
      case "PDF":
        return <FileText className="h-5 w-5 text-red-500" />
      case "DOCX":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "XLSX":
        return <FileText className="h-5 w-5 text-green-500" />
      case "ZIP":
        return <FileText className="h-5 w-5 text-yellow-500" />
      default:
        return <Paperclip className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30px]">
            <Checkbox />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="hidden md:table-cell">Category</TableHead>
          <TableHead className="hidden lg:table-cell">Location</TableHead>
          <TableHead className="hidden sm:table-cell">Added</TableHead>
          <TableHead className="hidden md:table-cell">Size</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource) => (
          <TableRow key={resource.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {getResourceIcon(resource)}
                <div>
                  <div className="font-medium">{resource.title}</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">{resource.description}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge variant="outline">{resource.category}</Badge>
            </TableCell>
            <TableCell className="hidden lg:table-cell">{resource.folder}</TableCell>
            <TableCell className="hidden sm:table-cell">
              <div className="text-sm">{formatDistanceToNow(resource.dateAdded, { addSuffix: true })}</div>
              <div className="text-xs text-muted-foreground">by {resource.addedBy}</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {resource.type === "document" ? resource.size : "External Link"}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                {resource.type === "document" ? (
                  <Button variant="outline" size="icon" className="h-8 w-8" title="Download">
                    <Download className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="outline" size="icon" className="h-8 w-8" title="Open Link">
                    <Link2 className="h-4 w-4" />
                  </Button>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

