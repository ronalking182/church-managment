"use client"

import { useState } from "react"
import { ChevronRight, Folder, FolderOpen, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FolderNode = {
  id: string
  name: string
  children?: FolderNode[]
}

export function FolderTree() {
  // Sample folder structure - in a real app, this would come from an API
  const folders: FolderNode[] = [
    {
      id: "1",
      name: "Choir Documents",
      children: [
        {
          id: "1-1",
          name: "Bylaws and Policies",
        },
        {
          id: "1-2",
          name: "Member Directory",
        },
        {
          id: "1-3",
          name: "Meeting Minutes",
        },
      ],
    },
    {
      id: "2",
      name: "Event Materials",
      children: [
        {
          id: "2-1",
          name: "Concert Programs",
        },
        {
          id: "2-2",
          name: "Promotional Materials",
        },
        {
          id: "2-3",
          name: "Photos and Videos",
        },
      ],
    },
    {
      id: "3",
      name: "Administrative",
      children: [
        {
          id: "3-1",
          name: "Budget Documents",
        },
        {
          id: "3-2",
          name: "Grant Applications",
        },
        {
          id: "3-3",
          name: "Volunteer Schedules",
        },
      ],
    },
    {
      id: "4",
      name: "Educational Resources",
      children: [
        {
          id: "4-1",
          name: "Vocal Technique",
        },
        {
          id: "4-2",
          name: "Music Theory",
        },
        {
          id: "4-3",
          name: "Sight Reading",
        },
      ],
    },
    {
      id: "5",
      name: "Templates",
      children: [
        {
          id: "5-1",
          name: "Forms",
        },
        {
          id: "5-2",
          name: "Letters",
        },
        {
          id: "5-3",
          name: "Spreadsheets",
        },
      ],
    },
  ]

  const [expandedFolders, setExpandedFolders] = useState<string[]>(["1"])
  const [selectedFolder, setSelectedFolder] = useState<string>("1-1")

  const toggleFolder = (folderId: string) => {
    if (expandedFolders.includes(folderId)) {
      setExpandedFolders(expandedFolders.filter((id) => id !== folderId))
    } else {
      setExpandedFolders([...expandedFolders, folderId])
    }
  }

  const selectFolder = (folderId: string) => {
    setSelectedFolder(folderId)
  }

  const renderFolder = (folder: FolderNode, level = 0) => {
    const isExpanded = expandedFolders.includes(folder.id)
    const isSelected = selectedFolder === folder.id
    const hasChildren = folder.children && folder.children.length > 0

    return (
      <div key={folder.id} className="select-none">
        <div
          className={cn(
            "flex items-center py-1 px-2 hover:bg-muted/50 rounded-sm cursor-pointer",
            isSelected && "bg-muted",
            level > 0 && "ml-4",
          )}
          onClick={() => {
            selectFolder(folder.id)
            if (hasChildren && !isExpanded) {
              toggleFolder(folder.id)
            }
          }}
        >
          {hasChildren ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 p-0 mr-1"
              onClick={(e) => {
                e.stopPropagation()
                toggleFolder(folder.id)
              }}
            >
              <ChevronRight className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-90")} />
            </Button>
          ) : (
            <div className="w-6" />
          )}
          {isExpanded ? (
            <FolderOpen className="h-4 w-4 mr-2 text-primary" />
          ) : (
            <Folder className="h-4 w-4 mr-2 text-primary" />
          )}
          <span className="text-sm">{folder.name}</span>
        </div>

        {isExpanded && folder.children && (
          <div className="mt-1">{folder.children.map((child) => renderFolder(child, level + 1))}</div>
        )}
      </div>
    )
  }

  return (
    <div className="p-2 overflow-x-auto">
      <div className="flex items-center justify-between px-2 py-1.5 mb-2">
        <h3 className="text-sm font-medium">Folder Structure</h3>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-1 min-w-[200px]">{folders.map((folder) => renderFolder(folder))}</div>
    </div>
  )
}

