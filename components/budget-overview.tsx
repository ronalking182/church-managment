"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

export function BudgetOverview() {
  // Sample budget data - in a real app, this would come from an API
  const data = [
    { name: "Music Purchases", value: 2500, color: "hsl(var(--primary))" },
    { name: "Events & Performances", value: 3000, color: "hsl(var(--primary) / 0.8)" },
    { name: "Equipment", value: 1200, color: "hsl(var(--primary) / 0.6)" },
    { name: "Venue Rentals", value: 1800, color: "hsl(var(--primary) / 0.4)" },
    { name: "Administrative", value: 800, color: "hsl(var(--primary) / 0.2)" },
  ]

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

