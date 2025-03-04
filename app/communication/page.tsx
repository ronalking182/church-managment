import { Bell, MessageCircle, MessageSquare, Plus, Search, Settings, Users } from "lucide-react"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnnouncementsList } from "@/components/announcements-list"
import { MessageList } from "@/components/message-list"
import { DiscussionList } from "@/components/discussion-list"

export default function CommunicationPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Communication</h1>
            <p className="text-muted-foreground">Manage announcements, messages, and discussions</p>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Message
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 direct messages, 1 announcement</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Discussions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">2 new replies today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Announcements</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">3 in the last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">Out of 42 total members</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="md:w-64 lg:w-72 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contacts</CardTitle>
                <CardDescription>Message choir members directly</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="px-4 pb-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search contacts..." className="pl-8" />
                  </div>
                </div>
                <div className="max-h-[400px] overflow-auto">
                  {["Soprano", "Alto", "Tenor", "Bass", "Directors", "Staff"].map((section) => (
                    <div key={section} className="py-2">
                      <h3 className="px-4 text-sm font-medium text-muted-foreground">{section}</h3>
                      <div className="mt-1">
                        {[1, 2, 3].map((i) => (
                          <button
                            key={i}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors"
                          >
                            <div className="relative h-8 w-8 rounded-full bg-primary/20">
                              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-primary">
                                {section[0]}
                                {i}
                              </span>
                              {i === 1 && (
                                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary"></span>
                              )}
                            </div>
                            <div className="text-left">
                              <div className="text-sm font-medium">
                                {section} Member {i}
                              </div>
                              <div className="text-xs text-muted-foreground">{i === 1 ? "Online" : "Offline"}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Notifications</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email notifications</span>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Push notifications</span>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Privacy</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Contact visibility</span>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full" size="sm">
                  <Settings className="mr-2 h-4 w-4" /> All Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <Tabs defaultValue="messages" className="w-full">
              <TabsList className="grid grid-cols-3 w-full md:w-auto">
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
              </TabsList>

              <TabsContent value="messages" className="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Direct Messages</CardTitle>
                    <CardDescription>Private messages between you and other members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MessageList />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="announcements" className="mt-4 space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Announcements</CardTitle>
                      <CardDescription>Important updates from directors and administrators</CardDescription>
                    </div>
                    <Button size="sm" className="hidden sm:flex">
                      <Plus className="mr-2 h-4 w-4" /> New Announcement
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <AnnouncementsList extended />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussions" className="mt-4 space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Discussion Forums</CardTitle>
                      <CardDescription>Group discussions on various topics</CardDescription>
                    </div>
                    <Button size="sm" className="hidden sm:flex">
                      <Plus className="mr-2 h-4 w-4" /> New Discussion
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <DiscussionList />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

