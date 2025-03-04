"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NotificationSettings() {
  // Sample notification settings - in a real app, this would come from an API
  const [emailSettings, setEmailSettings] = useState({
    announcements: true,
    rehearsalReminders: true,
    performanceReminders: true,
    directMessages: true,
    discussionReplies: false,
    duesReminders: true,
    weeklyDigest: true,
  })

  const [appSettings, setAppSettings] = useState({
    announcements: true,
    rehearsalReminders: true,
    performanceReminders: true,
    directMessages: true,
    discussionReplies: true,
    duesReminders: true,
    newResources: true,
  })

  const handleSave = () => {
    // In a real app, this would send the updated settings to an API
    console.log("Saving notification settings")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Configure how and when you receive notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="email">
          <TabsList className="mb-4">
            <TabsTrigger value="email">Email Notifications</TabsTrigger>
            <TabsTrigger value="app">App Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="announcements-email">Announcements</Label>
                  <p className="text-sm text-muted-foreground">Receive emails for important choir announcements</p>
                </div>
                <Switch
                  id="announcements-email"
                  checked={emailSettings.announcements}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, announcements: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="rehearsal-email">Rehearsal Reminders</Label>
                  <p className="text-sm text-muted-foreground">Receive email reminders before rehearsals</p>
                </div>
                <Switch
                  id="rehearsal-email"
                  checked={emailSettings.rehearsalReminders}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, rehearsalReminders: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="performance-email">Performance Reminders</Label>
                  <p className="text-sm text-muted-foreground">Receive email reminders before performances</p>
                </div>
                <Switch
                  id="performance-email"
                  checked={emailSettings.performanceReminders}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, performanceReminders: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="messages-email">Direct Messages</Label>
                  <p className="text-sm text-muted-foreground">Receive emails when you get a new direct message</p>
                </div>
                <Switch
                  id="messages-email"
                  checked={emailSettings.directMessages}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, directMessages: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="discussion-email">Discussion Replies</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails when someone replies to your discussion posts
                  </p>
                </div>
                <Switch
                  id="discussion-email"
                  checked={emailSettings.discussionReplies}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, discussionReplies: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dues-email">Dues Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email reminders about upcoming or overdue dues
                  </p>
                </div>
                <Switch
                  id="dues-email"
                  checked={emailSettings.duesReminders}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, duesReminders: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="digest-email">Weekly Digest</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive a weekly summary of choir activities and upcoming events
                  </p>
                </div>
                <Switch
                  id="digest-email"
                  checked={emailSettings.weeklyDigest}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, weeklyDigest: checked })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="app" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="announcements-app">Announcements</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications for important choir announcements
                  </p>
                </div>
                <Switch
                  id="announcements-app"
                  checked={appSettings.announcements}
                  onCheckedChange={(checked) => setAppSettings({ ...appSettings, announcements: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="rehearsal-app">Rehearsal Reminders</Label>
                  <p className="text-sm text-muted-foreground">Receive in-app reminders before rehearsals</p>
                </div>
                <Switch
                  id="rehearsal-app"
                  checked={appSettings.rehearsalReminders}
                  onCheckedChange={(checked) => setAppSettings({ ...appSettings, rehearsalReminders: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="performance-app">Performance Reminders</Label>
                  <p className="text-sm text-muted-foreground">Receive in-app reminders before performances</p>
                </div>
                <Switch
                  id="performance-app"
                  checked={appSettings.performanceReminders}
                  onCheckedChange={(checked) => setAppSettings({ ...appSettings, performanceReminders: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="messages-app">Direct Messages</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications when you get a new direct message
                  </p>
                </div>
                <Switch
                  id="messages-app"
                  checked={appSettings.directMessages}
                  onCheckedChange={(checked) => setAppSettings({ ...appSettings, directMessages: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="discussion-app">Discussion Replies</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications when someone replies to your discussion posts
                  </p>
                </div>
                <Switch
                  id="discussion-app"
                  checked={appSettings.discussionReplies}
                  onCheckedChange={(checked) => setAppSettings({ ...appSettings, discussionReplies: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dues-app">Dues Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app reminders about upcoming or overdue dues
                  </p>
                </div>
                <Switch
                  id="dues-app"
                  checked={appSettings.duesReminders}
                  onCheckedChange={(checked) => setAppSettings({ ...appSettings, duesReminders: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="resources-app">New Resources</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive in-app notifications when new resources are added
                  </p>
                </div>
                <Switch
                  id="resources-app"
                  checked={appSettings.newResources}
                  onCheckedChange={(checked) => setAppSettings({ ...appSettings, newResources: checked })}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}

