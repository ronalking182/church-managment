"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function AttendanceChart() {
  // Sample attendance data - in a real app, this would come from an API
  const data = [
    {
      name: "Jan",
      rehearsals: 90,
      performances: 100,
    },
    {
      name: "Feb",
      rehearsals: 85,
      performances: 95,
    },
    {
      name: "Mar",
      rehearsals: 92,
      performances: 98,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar dataKey="rehearsals" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Rehearsals" />
        <Bar dataKey="performances" fill="hsl(var(--primary) / 0.3)" radius={[4, 4, 0, 0]} name="Performances" />
      </BarChart>
    </ResponsiveContainer>
  )
}

