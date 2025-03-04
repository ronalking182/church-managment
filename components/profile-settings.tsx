"use client"

import { useState } from "react"
import { Camera, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileSettings() {
  const [isEditing, setIsEditing] = useState(false)

  // Sample user data - in a real app, this would come from an API
  const [userData, setUserData] = useState({
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    section: "Tenor",
    bio: "Choir member since 2020. I enjoy singing classical and contemporary pieces.",
    address: "123 Main St, Anytown, USA",
    emergencyContact: "Jane Smith, (555) 987-6543",
  })

  const handleSave = () => {
    // In a real app, this would send the updated data to an API
    setIsEditing(false)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>Manage your personal information and profile details</CardDescription>
        </div>
        <Button variant={isEditing ? "ghost" : "outline"} size="sm" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            "Cancel"
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Profile
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col items-center gap-4 sm:w-auto">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
              <AvatarFallback className="text-lg">JS</AvatarFallback>
            </Avatar>
            {isEditing && (
              <Button variant="outline" size="sm" className="w-full">
                <Camera className="mr-2 h-4 w-4" />
                Change Photo
              </Button>
            )}
          </div>

          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="section">Choir Section</Label>
                <Select
                  disabled={!isEditing}
                  value={userData.section}
                  onValueChange={(value) => setUserData({ ...userData, section: value })}
                >
                  <SelectTrigger id="section">
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Soprano">Soprano</SelectItem>
                    <SelectItem value="Alto">Alto</SelectItem>
                    <SelectItem value="Tenor">Tenor</SelectItem>
                    <SelectItem value="Bass">Bass</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={userData.bio}
                onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                disabled={!isEditing}
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Additional Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={userData.address}
                onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                disabled={!isEditing}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergency-contact">Emergency Contact</Label>
              <Textarea
                id="emergency-contact"
                value={userData.emergencyContact}
                onChange={(e) => setUserData({ ...userData, emergencyContact: e.target.value })}
                disabled={!isEditing}
                rows={2}
                placeholder="Name, relationship, phone number"
              />
            </div>
          </div>
        </div>
      </CardContent>
      {isEditing && (
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardFooter>
      )}
    </Card>
  )
}

