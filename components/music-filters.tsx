"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export function MusicFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedVoiceParts, setSelectedVoiceParts] = useState<string[]>([])

  const categories = ["Hymn", "Contemporary", "Classical", "Gospel", "Worship", "Seasonal", "Special"]

  const voiceParts = ["Soprano", "Alto", "Tenor", "Bass", "SATB", "SAB", "Unison"]

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const toggleVoicePart = (part: string) => {
    if (selectedVoiceParts.includes(part)) {
      setSelectedVoiceParts(selectedVoiceParts.filter((p) => p !== part))
    } else {
      setSelectedVoiceParts([...selectedVoiceParts, part])
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
        <h3 className="text-sm font-medium">Voice Parts</h3>
        <div className="flex flex-wrap gap-2">
          {voiceParts.map((part) => (
            <Badge
              key={part}
              variant="outline"
              className={cn("cursor-pointer", selectedVoiceParts.includes(part) && "bg-primary/20 hover:bg-primary/30")}
              onClick={() => toggleVoicePart(part)}
            >
              {part}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Difficulty Level</h3>
        <Slider defaultValue={[3]} max={5} step={1} className="py-4" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Advanced</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">File Type</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="sheet-music" defaultChecked />
            <label htmlFor="sheet-music" className="text-sm">
              Sheet Music
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="audio" defaultChecked />
            <label htmlFor="audio" className="text-sm">
              Audio Recordings
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="midi" defaultChecked />
            <label htmlFor="midi" className="text-sm">
              MIDI Files
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="video" defaultChecked />
            <label htmlFor="video" className="text-sm">
              Video Tutorials
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Date Added</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="last-week" />
            <label htmlFor="last-week" className="text-sm">
              Last Week
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="last-month" />
            <label htmlFor="last-month" className="text-sm">
              Last Month
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="last-3-months" />
            <label htmlFor="last-3-months" className="text-sm">
              Last 3 Months
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="last-year" />
            <label htmlFor="last-year" className="text-sm">
              Last Year
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

