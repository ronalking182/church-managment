import { Filter, Plus, Search } from "lucide-react"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MusicFilters } from "@/components/music-filters"
import { MusicGrid } from "@/components/music-grid"
import { MusicTable } from "@/components/music-table"

export default function MusicPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Music Library</h1>
            <p className="text-muted-foreground">Access and manage your sheet music and recordings</p>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Music
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          <Card className="md:w-64 lg:w-72">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <MusicFilters />
            </CardContent>
          </Card>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search music..." className="pl-8" />
              </div>
              <Button variant="outline" className="sm:w-auto">
                <Filter className="mr-2 h-4 w-4" /> Sort
              </Button>
            </div>

            <Tabs defaultValue="grid" className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="table">Table View</TabsTrigger>
                </TabsList>

                <div className="text-sm text-muted-foreground">Showing 24 of 124 items</div>
              </div>

              <TabsContent value="grid" className="mt-0">
                <MusicGrid />
              </TabsContent>

              <TabsContent value="table" className="mt-0">
                <Card>
                  <CardContent className="p-0">
                    <MusicTable />
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

