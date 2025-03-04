import { Calendar } from "@/components/ui/calendar"
import { CreditCard, DollarSign, MoreHorizontal, Music, ShoppingCart, Users } from "lucide-react"
import { format } from "date-fns"
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

export function TransactionList() {
  // Sample transactions data - in a real app, this would come from an API
  const transactions = [
    {
      id: 1,
      date: new Date(2025, 2, 15),
      description: "Sheet Music Purchase",
      category: "Music",
      amount: -350.0,
      type: "expense",
      paymentMethod: "Credit Card",
      status: "completed",
    },
    {
      id: 2,
      date: new Date(2025, 2, 14),
      description: "Member Dues - Sarah Johnson",
      category: "Dues",
      amount: 120.0,
      type: "income",
      paymentMethod: "Bank Transfer",
      status: "completed",
    },
    {
      id: 3,
      date: new Date(2025, 2, 12),
      description: "Venue Rental - Spring Concert",
      category: "Events",
      amount: -500.0,
      type: "expense",
      paymentMethod: "Check",
      status: "completed",
    },
    {
      id: 4,
      date: new Date(2025, 2, 10),
      description: "Donation - Community Foundation",
      category: "Donations",
      amount: 1000.0,
      type: "income",
      paymentMethod: "Bank Transfer",
      status: "completed",
    },
    {
      id: 5,
      date: new Date(2025, 2, 8),
      description: "Sound Equipment Rental",
      category: "Equipment",
      amount: -250.0,
      type: "expense",
      paymentMethod: "Credit Card",
      status: "pending",
    },
    {
      id: 6,
      date: new Date(2025, 2, 5),
      description: "Member Dues - Multiple Members",
      category: "Dues",
      amount: 480.0,
      type: "income",
      paymentMethod: "Various",
      status: "completed",
    },
    {
      id: 7,
      date: new Date(2025, 2, 3),
      description: "Printing - Concert Programs",
      category: "Events",
      amount: -175.0,
      type: "expense",
      paymentMethod: "Credit Card",
      status: "completed",
    },
  ]

  // Get icon based on transaction category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Music":
        return <Music className="h-4 w-4" />
      case "Dues":
        return <Users className="h-4 w-4" />
      case "Events":
        return <Calendar className="h-4 w-4" />
      case "Donations":
        return <DollarSign className="h-4 w-4" />
      case "Equipment":
        return <ShoppingCart className="h-4 w-4" />
      default:
        return <CreditCard className="h-4 w-4" />
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="hidden md:table-cell">Category</TableHead>
          <TableHead className="hidden lg:table-cell">Payment Method</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{format(transaction.date, "MMM d, yyyy")}</TableCell>
            <TableCell>
              <div className="font-medium">{transaction.description}</div>
              <div className="md:hidden text-xs text-muted-foreground">{transaction.category}</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge variant="outline" className="flex w-fit items-center gap-1">
                {getCategoryIcon(transaction.category)}
                <span>{transaction.category}</span>
              </Badge>
            </TableCell>
            <TableCell className="hidden lg:table-cell">{transaction.paymentMethod}</TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge
                variant={transaction.status === "completed" ? "outline" : "secondary"}
                className={cn("capitalize", transaction.status === "pending" && "border-yellow-500 text-yellow-500")}
              >
                {transaction.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div
                className={cn(
                  "font-medium tabular-nums",
                  transaction.type === "income"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400",
                )}
              >
                {transaction.type === "income" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
              </div>
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
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Transaction</DropdownMenuItem>
                  <DropdownMenuItem>Print Receipt</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Transaction</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

