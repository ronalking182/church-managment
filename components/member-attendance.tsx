import { MoreHorizontal } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export function MemberAttendance() {
  // Sample member data - in a real app, this would come from an API
  const members = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      section: "Tenor",
      role: "Section Leader",
      totalEvents: 24,
      attendedEvents: 22,
      attendanceRate: 92,
      lastAttended: "Mar 17, 2025",
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      section: "Soprano",
      role: "Member",
      totalEvents: 24,
      attendedEvents: 20,
      attendanceRate: 83,
      lastAttended: "Mar 17, 2025",
      status: "active",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      section: "Bass",
      role: "Section Leader",
      totalEvents: 24,
      attendedEvents: 23,
      attendanceRate: 96,
      lastAttended: "Mar 17, 2025",
      status: "active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      section: "Alto",
      role: "Member",
      totalEvents: 24,
      attendedEvents: 18,
      attendanceRate: 75,
      lastAttended: "Mar 15, 2025",
      status: "active",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@example.com",
      section: "Bass",
      role: "Member",
      totalEvents: 24,
      attendedEvents: 16,
      attendanceRate: 67,
      lastAttended: "Mar 15, 2025",
      status: "warning",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead className="hidden md:table-cell">Section</TableHead>
          <TableHead className="hidden lg:table-cell">Role</TableHead>
          <TableHead className="text-right">Attendance</TableHead>
          <TableHead className="text-right">Rate</TableHead>
          <TableHead className="hidden md:table-cell">Last Attended</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{member.name}</div>
                  <div className="hidden sm:block text-xs text-muted-foreground">{member.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{member.section}</TableCell>
            <TableCell className="hidden lg:table-cell">{member.role}</TableCell>
            <TableCell className="text-right">
              <div>
                <span className="font-medium">{member.attendedEvents}</span>
                <span className="text-muted-foreground">/{member.totalEvents}</span>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Badge
                variant="outline"
                className={cn(
                  member.attendanceRate >= 90 && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
                  member.attendanceRate >= 75 &&
                    member.attendanceRate < 90 &&
                    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                  member.attendanceRate < 75 &&
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
                )}
              >
                {member.attendanceRate}%
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">{member.lastAttended}</TableCell>
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
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Member</DropdownMenuItem>
                  <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                  <DropdownMenuItem>Export Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

