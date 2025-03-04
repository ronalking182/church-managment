import { Calendar, Check, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

export function AttendanceTable() {
  // Sample attendance data - in a real app, this would come from an API
  const attendanceRecords = [
    {
      id: 1,
      eventName: "Weekly Rehearsal",
      date: "Mar 15, 2025",
      time: "7:00 PM - 8:30 PM",
      type: "rehearsal",
      totalMembers: 42,
      presentCount: 35,
      absentCount: 7,
      attendanceRate: 83,
      status: "completed",
    },
    {
      id: 2,
      eventName: "Sunday Morning Service",
      date: "Mar 17, 2025",
      time: "10:30 AM - 12:00 PM",
      type: "performance",
      totalMembers: 42,
      presentCount: 40,
      absentCount: 2,
      attendanceRate: 95,
      status: "completed",
    },
    {
      id: 3,
      eventName: "Sectional Practice - Sopranos & Altos",
      date: "Mar 19, 2025",
      time: "6:30 PM - 7:30 PM",
      type: "rehearsal",
      totalMembers: 24,
      presentCount: 20,
      absentCount: 4,
      attendanceRate: 83,
      status: "completed",
    },
    {
      id: 4,
      eventName: "Weekly Rehearsal",
      date: "Mar 22, 2025",
      time: "7:00 PM - 8:30 PM",
      type: "rehearsal",
      totalMembers: 42,
      presentCount: 0,
      absentCount: 0,
      attendanceRate: 0,
      status: "pending",
    },
    {
      id: 5,
      eventName: "Sunday Morning Service",
      date: "Mar 24, 2025",
      time: "10:30 AM - 12:00 PM",
      type: "performance",
      totalMembers: 42,
      presentCount: 0,
      absentCount: 0,
      attendanceRate: 0,
      status: "pending",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Event</TableHead>
          <TableHead className="hidden md:table-cell">Date & Time</TableHead>
          <TableHead className="hidden sm:table-cell">Type</TableHead>
          <TableHead className="text-right">Attendance</TableHead>
          <TableHead className="hidden lg:table-cell text-right">Rate</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendanceRecords.map((record) => (
          <TableRow key={record.id}>
            <TableCell>
              <div className="font-medium">{record.eventName}</div>
              <div className="md:hidden text-xs text-muted-foreground">
                {record.date} • {record.time}
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <div>{record.date}</div>
              <div className="text-xs text-muted-foreground">{record.time}</div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge
                variant="outline"
                className={cn(
                  record.type === "rehearsal" && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                  record.type === "performance" && "bg-primary/20 text-primary",
                )}
              >
                {record.type.charAt(0).toUpperCase() + record.type.slice(1)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              {record.status === "completed" ? (
                <div>
                  <span className="font-medium">{record.presentCount}</span>
                  <span className="text-muted-foreground">/{record.totalMembers}</span>
                </div>
              ) : (
                <Badge variant="outline">Pending</Badge>
              )}
            </TableCell>
            <TableCell className="hidden lg:table-cell text-right">
              {record.status === "completed" ? <div className="font-medium">{record.attendanceRate}%</div> : "-"}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {record.status === "completed" ? (
                <div className="flex items-center">
                  <Check className="mr-1 h-4 w-4 text-green-500" />
                  <span>Completed</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span>Pending</span>
                </div>
              )}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {record.status === "pending" ? (
                    <DropdownMenuItem>Take Attendance</DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>Edit Attendance</DropdownMenuItem>
                  )}
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Export Report</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Record</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

