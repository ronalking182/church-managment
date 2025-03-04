import { Calendar, Clock, Music, Users } from "lucide-react"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarWidget } from "@/components/calendar-widget"
import { AnnouncementsList } from "@/components/announcements-list"
import { UpcomingEvents } from "@/components/upcoming-events"
import { RecentMusic } from "@/components/recent-music"
import { AttendanceChart } from "@/components/attendance-chart"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Rehearsal</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Today, 7:00 PM</div>
              <p className="text-xs text-muted-foreground">Main Sanctuary</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Performance</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Sunday, 10:30 AM</div>
              <p className="text-xs text-muted-foreground">Morning Service</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Last 4 weeks</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Music</CardTitle>
              <Music className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Songs</div>
              <p className="text-xs text-muted-foreground">Added this week</p>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Your schedule for the next two weeks</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingEvents />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Announcements</CardTitle>
                  <CardDescription>Stay updated with the latest news</CardDescription>
                </CardHeader>
                <CardContent>
                  <AnnouncementsList />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Music</CardTitle>
                  <CardDescription>Music added or updated recently</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentMusic />
                </CardContent>
              </Card>
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Attendance Overview</CardTitle>
                  <CardDescription>Your attendance for the last 3 months</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <AttendanceChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>View and manage your rehearsal and performance schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <CalendarWidget />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="announcements">
            <Card>
              <CardHeader>
                <CardTitle>All Announcements</CardTitle>
                <CardDescription>Important updates and information</CardDescription>
              </CardHeader>
              <CardContent>
                <AnnouncementsList extended />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="music">
            <Card>
              <CardHeader>
                <CardTitle>Music Library</CardTitle>
                <CardDescription>Access your sheet music and recordings</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentMusic extended />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

