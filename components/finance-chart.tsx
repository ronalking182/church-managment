"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FinanceChart() {
  // Sample finance data - in a real app, this would come from an API
  const data = [
    {
      name: "Jan",
      income: 1200,
      expenses: 900,
    },
    {
      name: "Feb",
      income: 1500,
      expenses: 1200,
    },
    {
      name: "Mar",
      income: 2000,
      expenses: 1400,
    },
    {
      name: "Apr",
      income: 1800,
      expenses: 1300,
    },
    {
      name: "May",
      income: 2200,
      expenses: 1500,
    },
    {
      name: "Jun",
      income: 1900,
      expenses: 1400,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
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

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value}`} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Legend />
            <Bar name="Income" dataKey="income" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar name="Expenses" dataKey="expenses" fill="hsl(var(--primary) / 0.3)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

