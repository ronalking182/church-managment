"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AttendanceStats() {
  // Sample attendance data - in a real app, this would come from an API
  const data = [
    {
      name: "Jan",
      rehearsals: 82,
      performances: 95,
    },
    {
      name: "Feb",
      rehearsals: 78,
      performances: 92,
    },
    {
      name: "Mar",
      rehearsals: 85,
      performances: 98,
    },
    {
      name: "Apr",
      rehearsals: 80,
      performances: 94,
    },
    {
      name: "May",
      rehearsals: 83,
      performances: 96,
    },
    {
      name: "Jun",
      rehearsals: 75,
      performances: 90,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Attendance Overview</CardTitle>
          <CardDescription>Attendance rates for rehearsals and performances</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="6months">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">Last 3 months</SelectItem>
              <SelectItem value="6months">Last 6 months</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar name="Rehearsals" dataKey="rehearsals" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar name="Performances" dataKey="performances" fill="hsl(var(--primary) / 0.3)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

