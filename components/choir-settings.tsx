"use client"

import { useState } from "react"
import { Music, Mic, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"

export function ChoirSettings() {
  // Sample choir settings - in a real app, this would come from an API
  const [voicePreferences, setVoicePreferences] = useState({
    primaryVoicePart: "Tenor",
    canSingOtherParts: true,
    otherVoiceParts: ["Bass"],
    sightReadingLevel: "intermediate",
    preferredNotation: "standard",
  })

  const [repertoirePreferences, setRepertoirePreferences] = useState({
    genres: ["Classical", "Contemporary"],
    languages: ["English", "Latin"],
    notificationForNewMusic: true,
    autoDownloadNewMusic: false,
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Choir Settings</CardTitle>
        <CardDescription>Manage your choir-specific preferences and settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mic className="h-5 w-5" />
            <h3 className="text-lg font-medium">Voice Preferences</h3>
          </div>

          <div className="space-y-2">
            <Label htmlFor="primary-voice">Primary Voice Part</Label>
            <Select
              value={voicePreferences.primaryVoicePart}
              onValueChange={(value) => setVoicePreferences({ ...voicePreferences, primaryVoicePart: value })}
            >
              <SelectTrigger id="primary-voice">
                <SelectValue placeholder="Select voice part" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Soprano">Soprano</SelectItem>
                <SelectItem value="Alto">Alto</SelectItem>
                <SelectItem value="Tenor">Tenor</SelectItem>
                <SelectItem value="Bass">Bass</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="other-parts">Can Sing Other Parts</Label>
              <p className="text-sm text-muted-foreground">Indicate if you can sing parts other than your primary</p>
            </div>
            <Switch
              id="other-parts"
              checked={voicePreferences.canSingOtherParts}
              onCheckedChange={(checked) => setVoicePreferences({ ...voicePreferences, canSingOtherParts: checked })}
            />
          </div>

          {voicePreferences.canSingOtherParts && (
            <div className="space-y-2 pl-6 border-l-2 border-muted">
              <Label>Other Voice Parts</Label>
              <div className="space-y-2">
                {["Soprano", "Alto", "Tenor", "Bass"]
                  .filter((part) => part !== voicePreferences.primaryVoicePart)
                  .map((part) => (
                    <div key={part} className="flex items-center space-x-2">
                      <Checkbox
                        id={`voice-${part.toLowerCase()}`}
                        checked={voicePreferences.otherVoiceParts.includes(part)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setVoicePreferences({
                              ...voicePreferences,
                              otherVoiceParts: [...voicePreferences.otherVoiceParts, part],
                            })
                          } else {
                            setVoicePreferences({
                              ...voicePreferences,
                              otherVoiceParts: voicePreferences.otherVoiceParts.filter((p) => p !== part),
                            })
                          }
                        }}
                      />
                      <label
                        htmlFor={`voice-${part.toLowerCase()}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {part}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="sight-reading">Sight Reading Level</Label>
            <Select
              value={voicePreferences.sightReadingLevel}
              onValueChange={(value) => setVoicePreferences({ ...voicePreferences, sightReadingLevel: value })}
            >
              <SelectTrigger id="sight-reading">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Preferred Music Notation</Label>
            <RadioGroup
              value={voicePreferences.preferredNotation}
              onValueChange={(value) => setVoicePreferences({ ...voicePreferences, preferredNotation: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="notation-standard" />
                <Label htmlFor="notation-standard">Standard Notation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="shape-note" id="notation-shape" />
                <Label htmlFor="notation-shape">Shape Note</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="notation-both" />
                <Label htmlFor="notation-both">Both</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            <h3 className="text-lg font-medium">Repertoire Preferences</h3>
          </div>

          <div className="space-y-2">
            <Label>Preferred Genres</Label>
            <div className="grid grid-cols-2 gap-2">
              {["Classical", "Contemporary", "Gospel", "Folk", "Sacred", "Secular"].map((genre) => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox
                    id={`genre-${genre.toLowerCase()}`}
                    checked={repertoirePreferences.genres.includes(genre)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setRepertoirePreferences({
                          ...repertoirePreferences,
                          genres: [...repertoirePreferences.genres, genre],
                        })
                      } else {
                        setRepertoirePreferences({
                          ...repertoirePreferences,
                          genres: repertoirePreferences.genres.filter((g) => g !== genre),
                        })
                      }
                    }}
                  />
                  <label
                    htmlFor={`genre-${genre.toLowerCase()}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {genre}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Preferred Languages</Label>
            <div className="grid grid-cols-2 gap-2">
              {["English", "Latin", "German", "French", "Italian", "Spanish"].map((language) => (
                <div key={language} className="flex items-center space-x-2">
                  <Checkbox
                    id={`language-${language.toLowerCase()}`}
                    checked={repertoirePreferences.languages.includes(language)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setRepertoirePreferences({
                          ...repertoirePreferences,
                          languages: [...repertoirePreferences.languages, language],
                        })
                      } else {
                        setRepertoirePreferences({
                          ...repertoirePreferences,
                          languages: repertoirePreferences.languages.filter((l) => l !== language),
                        })
                      }
                    }}
                  />
                  <label
                    htmlFor={`language-${language.toLowerCase()}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {language}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="new-music-notification">New Music Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications when new music is added</p>
            </div>
            <Switch
              id="new-music-notification"
              checked={repertoirePreferences.notificationForNewMusic}
              onCheckedChange={(checked) =>
                setRepertoirePreferences({ ...repertoirePreferences, notificationForNewMusic: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-download">Auto-Download New Music</Label>
              <p className="text-sm text-muted-foreground">Automatically download new music when it's added</p>
            </div>
            <Switch
              id="auto-download"
              checked={repertoirePreferences.autoDownloadNewMusic}
              onCheckedChange={(checked) =>
                setRepertoirePreferences({ ...repertoirePreferences, autoDownloadNewMusic: checked })
              }
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <h3 className="text-lg font-medium">Music Display Settings</h3>
          </div>

          <div className="space-y-2">
            <Label htmlFor="default-view">Default Music View</Label>
            <Select defaultValue="sheet">
              <SelectTrigger id="default-view">
                <SelectValue placeholder="Select default view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sheet">Sheet Music</SelectItem>
                <SelectItem value="lyrics">Lyrics Only</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="transpose">Default Transposition</Label>
            <Select defaultValue="original">
              <SelectTrigger id="transpose">
                <SelectValue placeholder="Select default transposition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="original">Original Key</SelectItem>
                <SelectItem value="custom">Custom Key</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}

