import { MoreHorizontal } from "lucide-react"
import { format } from "date-fns"

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

export function DuesTable() {
  // Sample dues data - in a real app, this would come from an API
  const duesData = [
    {
      id: 1,
      member: {
        name: "John Smith",
        email: "john.smith@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JS",
        section: "Tenor",
      },
      dueAmount: 120.0,
      status: "paid",
      paymentDate: new Date(2025, 1, 15),
      paymentMethod: "Credit Card",
      notes: "",
    },
    {
      id: 2,
      member: {
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SJ",
        section: "Soprano",
      },
      dueAmount: 120.0,
      status: "paid",
      paymentDate: new Date(2025, 2, 14),
      paymentMethod: "Bank Transfer",
      notes: "",
    },
    {
      id: 3,
      member: {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MB",
        section: "Bass",
      },
      dueAmount: 120.0,
      status: "paid",
      paymentDate: new Date(2025, 1, 20),
      paymentMethod: "Cash",
      notes: "",
    },
    {
      id: 4,
      member: {
        name: "Emily Davis",
        email: "emily.davis@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ED",
        section: "Alto",
      },
      dueAmount: 120.0,
      status: "paid",
      paymentDate: new Date(2025, 2, 5),
      paymentMethod: "Check",
      notes: "",
    },
    {
      id: 5,
      member: {
        name: "David Wilson",
        email: "david.wilson@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DW",
        section: "Bass",
      },
      dueAmount: 120.0,
      status: "unpaid",
      paymentDate: null,
      paymentMethod: "",
      notes: "Payment due by March 31",
    },
    {
      id: 6,
      member: {
        name: "Jennifer Lee",
        email: "jennifer.lee@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JL",
        section: "Soprano",
      },
      dueAmount: 120.0,
      status: "unpaid",
      paymentDate: null,
      paymentMethod: "",
      notes: "Payment due by March 31",
    },
    {
      id: 7,
      member: {
        name: "Robert Johnson",
        email: "robert.johnson@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "RJ",
        section: "Tenor",
      },
      dueAmount: 120.0,
      status: "waived",
      paymentDate: null,
      paymentMethod: "",
      notes: "Scholarship recipient",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead className="hidden md:table-cell">Section</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="hidden lg:table-cell">Payment Date</TableHead>
          <TableHead className="hidden lg:table-cell">Method</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {duesData.map((dues) => (
          <TableRow key={dues.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={dues.member.avatar} alt={dues.member.name} />
                  <AvatarFallback>{dues.member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{dues.member.name}</div>
                  <div className="hidden sm:block text-xs text-muted-foreground">{dues.member.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{dues.member.section}</TableCell>
            <TableCell className="text-right font-medium tabular-nums">${dues.dueAmount.toFixed(2)}</TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge
                variant="outline"
                className={cn(
                  "capitalize",
                  dues.status === "paid" && "border-green-500 text-green-500",
                  dues.status === "unpaid" && "border-red-500 text-red-500",
                  dues.status === "waived" && "border-blue-500 text-blue-500",
                )}
              >
                {dues.status}
              </Badge>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {dues.paymentDate ? format(dues.paymentDate, "MMM d, yyyy") : "-"}
            </TableCell>
            <TableCell className="hidden lg:table-cell">{dues.paymentMethod || "-"}</TableCell>
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
                  {dues.status === "unpaid" ? (
                    <DropdownMenuItem>Record Payment</DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>View Receipt</DropdownMenuItem>
                  )}
                  <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                  <DropdownMenuItem>Edit Payment</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Member Details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

