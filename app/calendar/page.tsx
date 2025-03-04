import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FullCalendar } from "@/components/full-calendar"
import { EventList } from "@/components/event-list"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
            <p className="text-muted-foreground">Manage your rehearsals, performances, and events</p>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          <Card className="md:w-64 lg:w-72">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Event Type</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="cursor-pointer bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                  >
                    Rehearsals
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer bg-primary/20 hover:bg-primary/30">
                    Performances
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50"
                  >
                    Meetings
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-900/50"
                  >
                    Social Events
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Choir Section</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    All
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    Soprano
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    Alto
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    Tenor
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    Bass
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">View Calendar</h3>
                <Select defaultValue="month">
                  <SelectTrigger>
                    <SelectValue placeholder="Select view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">My Events</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="my-events" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="my-events" className="text-sm">
                      Show only my events
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex-1">
            <Tabs defaultValue="calendar" className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="calendar">Calendar</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="text-sm font-medium">March 2025</div>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Today
                  </Button>
                </div>
              </div>

              <TabsContent value="calendar" className="mt-0">
                <Card>
                  <CardContent className="p-0">
                    <FullCalendar />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="list" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>All scheduled rehearsals, performances, and other events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EventList />
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

