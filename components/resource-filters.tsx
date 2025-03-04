"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export function ResourceFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const categories = ["Administrative", "Events", "Educational", "Music", "Financial", "Templates"]

  const fileTypes = ["PDF", "DOCX", "XLSX", "ZIP", "MP3", "MP4", "Links"]

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className={cn(
                "cursor-pointer",
                selectedCategories.includes(category) && "bg-primary/20 hover:bg-primary/30",
              )}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">File Types</h3>
        <div className="flex flex-wrap gap-2">
          {fileTypes.map((type) => (
            <Badge
              key={type}
              variant="outline"
              className={cn("cursor-pointer", selectedTypes.includes(type) && "bg-primary/20 hover:bg-primary/30")}
              onClick={() => toggleType(type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Date Added</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="today" />
            <label htmlFor="today" className="text-sm">
              Today
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="this-week" />
            <label htmlFor="this-week" className="text-sm">
              This Week
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="this-month" />
            <label htmlFor="this-month" className="text-sm">
              This Month
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="last-month" />
            <label htmlFor="last-month" className="text-sm">
              Last Month
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Added By</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="me" />
            <label htmlFor="me" className="text-sm">
              Me
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="directors" />
            <label htmlFor="directors" className="text-sm">
              Directors
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="section-leaders" />
            <label htmlFor="section-leaders" className="text-sm">
              Section Leaders
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="administrators" />
            <label htmlFor="administrators" className="text-sm">
              Administrators
            </label>
          </div>
        </div>
      </div>

      <Button variant="outline" className="w-full">
        Reset Filters
      </Button>
    </div>
  )
}

