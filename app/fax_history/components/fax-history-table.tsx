"use client";

import { useEffect } from "react";
import { Check, Clock, Eye, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define the fax record type
export interface FaxRecord {
  id: number;
  faxId: string;
  date: string;
  recipient: string;
  faxNumber: string;
  email: string;
  country: string;
  creditCost: number;
  status: "successful" | "pending" | "failed";
}

// Fax history data
export const faxHistoryTable: FaxRecord[] = [
  {
    id: 1,
    faxId: "123e4567-e89b-12d3-a456-426614174001",
    date: "2023-03-15T09:23:45",
    recipient: "Sarah Johnson",
    faxNumber: "+1 (555) 123-4567",
    email: "sarah.johnson@example.com",
    country: "United States",
    creditCost: 2.25,
    status: "successful",
  },
  {
    id: 2,
    faxId: "123e4567-e89b-12d3-a456-426614174002",
    date: "2023-03-12T14:05:22",
    recipient: "Michael Chen",
    faxNumber: "+1 (555) 987-6543",
    email: "michael.chen@example.com",
    country: "Canada",
    creditCost: 2.5,
    status: "failed",
  },
  {
    id: 3,
    faxId: "123e4567-e89b-12d3-a456-426614174003",
    date: "2023-03-10T11:30:15",
    recipient: "Emma Wilson",
    faxNumber: "+44 (20) 1234-5678",
    email: "emma.wilson@example.com",
    country: "United Kingdom",
    creditCost: 3.0,
    status: "successful",
  },
  {
    id: 4,
    faxId: "123e4567-e89b-12d3-a456-426614174004",
    date: "2023-03-05T16:42:30",
    recipient: "James Rodriguez",
    faxNumber: "+34 (91) 987-6543",
    email: "james.r@example.com",
    country: "Spain",
    creditCost: 3.25,
    status: "pending",
  },
  {
    id: 5,
    faxId: "123e4567-e89b-12d3-a456-426614174005",
    date: "2023-03-01T08:15:00",
    recipient: "Olivia Brown",
    faxNumber: "+61 (2) 9876-5432",
    email: "olivia.brown@example.com",
    country: "Australia",
    creditCost: 3.5,
    status: "successful",
  },
  {
    id: 6,
    faxId: "123e4567-e89b-12d3-a456-426614174006",
    date: "2023-02-28T13:20:45",
    recipient: "William Taylor",
    faxNumber: "+1 (555) 234-5678",
    email: "william.t@example.com",
    country: "United States",
    creditCost: 2.25,
    status: "successful",
  },
  {
    id: 7,
    faxId: "123e4567-e89b-12d3-a456-426614174007",
    date: "2023-02-25T10:05:30",
    recipient: "Sophia Martinez",
    faxNumber: "+52 (55) 1234-5678",
    email: "sophia.m@example.com",
    country: "Mexico",
    creditCost: 2.75,
    status: "failed",
  },
  {
    id: 8,
    faxId: "123e4567-e89b-12d3-a456-426614174008",
    date: "2023-02-20T15:45:10",
    recipient: "Benjamin Lee",
    faxNumber: "+82 (2) 1234-5678",
    email: "ben.lee@example.com",
    country: "South Korea",
    creditCost: 3.75,
    status: "successful",
  },
  {
    id: 9,
    faxId: "123e4567-e89b-12d3-a456-426614174009",
    date: "2023-02-18T09:30:00",
    recipient: "Isabella Garcia",
    faxNumber: "+55 (11) 9876-5432",
    email: "isabella.g@example.com",
    country: "Brazil",
    creditCost: 3.0,
    status: "pending",
  },
  {
    id: 10,
    faxId: "123e4567-e89b-12d3-a456-426614174010",
    date: "2023-02-15T14:10:25",
    recipient: "Ethan Wright",
    faxNumber: "+1 (555) 345-6789",
    email: "ethan.w@example.com",
    country: "Canada",
    creditCost: 2.5,
    status: "successful",
  },
  {
    id: 11,
    faxId: "123e4567-e89b-12d3-a456-426614174011",
    date: "2023-02-10T11:25:40",
    recipient: "Mia Thompson",
    faxNumber: "+44 (20) 9876-5432",
    email: "mia.t@example.com",
    country: "United Kingdom",
    creditCost: 3.0,
    status: "failed",
  },
  {
    id: 12,
    faxId: "123e4567-e89b-12d3-a456-426614174012",
    date: "2023-02-05T16:30:15",
    recipient: "Alexander Davis",
    faxNumber: "+49 (30) 1234-5678",
    email: "alex.d@example.com",
    country: "Germany",
    creditCost: 3.25,
    status: "successful",
  },
  {
    id: 13,
    faxId: "123e4567-e89b-12d3-a456-426614174013",
    date: "2023-02-01T08:45:30",
    recipient: "Charlotte Wilson",
    faxNumber: "+33 (1) 2345-6789",
    email: "charlotte.w@example.com",
    country: "France",
    creditCost: 3.25,
    status: "pending",
  },
  {
    id: 14,
    faxId: "123e4567-e89b-12d3-a456-426614174014",
    date: "2023-01-28T13:15:00",
    recipient: "Daniel Martin",
    faxNumber: "+39 (06) 1234-5678",
    email: "daniel.m@example.com",
    country: "Italy",
    creditCost: 3.25,
    status: "successful",
  },
  {
    id: 15,
    faxId: "123e4567-e89b-12d3-a456-426614174015",
    date: "2023-01-25T10:20:45",
    recipient: "Amelia Anderson",
    faxNumber: "+1 (555) 456-7890",
    email: "amelia.a@example.com",
    country: "United States",
    creditCost: 2.25,
    status: "successful",
  },
  {
    id: 16,
    faxId: "123e4567-e89b-12d3-a456-426614174016",
    date: "2023-01-20T15:05:30",
    recipient: "Henry Thomas",
    faxNumber: "+1 (555) 567-8901",
    email: "henry.t@example.com",
    country: "Canada",
    creditCost: 2.5,
    status: "failed",
  },
  {
    id: 17,
    faxId: "123e4567-e89b-12d3-a456-426614174017",
    date: "2023-01-18T09:45:10",
    recipient: "Victoria Jackson",
    faxNumber: "+61 (2) 3456-7890",
    email: "victoria.j@example.com",
    country: "Australia",
    creditCost: 3.5,
    status: "successful",
  },
  {
    id: 18,
    faxId: "123e4567-e89b-12d3-a456-426614174018",
    date: "2023-01-15T14:30:00",
    recipient: "Joseph White",
    faxNumber: "+44 (20) 3456-7890",
    email: "joseph.w@example.com",
    country: "United Kingdom",
    creditCost: 3.0,
    status: "pending",
  },
  {
    id: 19,
    faxId: "123e4567-e89b-12d3-a456-426614174019",
    date: "2023-01-10T11:10:25",
    recipient: "Elizabeth Harris",
    faxNumber: "+1 (555) 678-9012",
    email: "elizabeth.h@example.com",
    country: "United States",
    creditCost: 2.25,
    status: "successful",
  },
  {
    id: 20,
    faxId: "123e4567-e89b-12d3-a456-426614174020",
    date: "2023-01-05T16:25:40",
    recipient: "David Clark",
    faxNumber: "+49 (30) 3456-7890",
    email: "david.c@example.com",
    country: "Germany",
    creditCost: 3.25,
    status: "failed",
  },
];

interface FaxHistoryTableProps {
  statusFilter: string;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onTotalPagesChange: (pages: number) => void;
  onFilteredCountChange: (count: number) => void;
}

export function FaxHistoryTable({
  statusFilter,
  currentPage,
  itemsPerPage,
  onPageChange,
  onTotalPagesChange,
  onFilteredCountChange,
}: FaxHistoryTableProps) {
  // Filter data based on status filter
  const filteredData = faxHistoryTable.filter((fax) => {
    return statusFilter === "all" || fax.status === statusFilter;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Update parent component with pagination info using useEffect instead of useState
  useEffect(() => {
    onTotalPagesChange(totalPages);
    onFilteredCountChange(filteredData.length);
  }, [
    totalPages,
    filteredData.length,
    onTotalPagesChange,
    onFilteredCountChange,
  ]);

  // Format date - more compact for table display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "2-digit",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Format UUID to be more readable
  const formatUUID = (uuid: string) => {
    return uuid.substring(0, 8) + "..." + uuid.substring(uuid.length - 4);
  };

  // Render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "successful":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
          >
            <Check className="h-3 w-3" />
            Successful
          </Badge>
        );
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-1"
          >
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
        );
      case "failed":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1"
          >
            <X className="h-3 w-3" />
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  // Desktop/tablet view
  const renderTable = () => (
    <div className="border rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15%]">Fax ID</TableHead>
            <TableHead className="w-[12%]">Date</TableHead>
            <TableHead className="w-[15%]">Recipient</TableHead>
            <TableHead className="hidden lg:table-cell w-[15%]">
              Fax Number
            </TableHead>
            <TableHead className="hidden xl:table-cell w-[15%]">
              Email
            </TableHead>
            <TableHead className="hidden md:table-cell w-[10%]">Cost</TableHead>
            <TableHead className="w-[10%]">Status</TableHead>
            <TableHead className="w-[8%]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((fax) => (
              <TableRow key={fax.id}>
                <TableCell className="font-medium">
                  <span className="inline-block" title={fax.faxId}>
                    {formatUUID(fax.faxId)}
                  </span>
                </TableCell>
                <TableCell>{formatDate(fax.date)}</TableCell>
                <TableCell className="break-words">{fax.recipient}</TableCell>
                <TableCell className="hidden lg:table-cell break-words">
                  {fax.faxNumber}
                </TableCell>
                <TableCell className="hidden xl:table-cell break-words">
                  {fax.email}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatCurrency(fax.creditCost)}
                </TableCell>
                <TableCell>{renderStatusBadge(fax.status)}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">Track</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={8}
                className="text-center py-8 text-muted-foreground"
              >
                No fax records found matching your criteria.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );

  // Mobile card view (only visible on xs screens)
  const renderCards = () => (
    <div className="sm:hidden space-y-4">
      {paginatedData.length > 0 ? (
        paginatedData.map((fax) => (
          <Card key={fax.id}>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{fax.recipient}</h3>
                  <p className="text-sm font-medium">
                    ID: {formatUUID(fax.faxId)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {fax.faxNumber}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {renderStatusBadge(fax.status)}
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">Track</span>
                  </Button>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-muted-foreground">Date</p>
                  <p>{formatDate(fax.date)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Cost</p>
                  <p>{formatCurrency(fax.creditCost)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          No fax records found matching your criteria.
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Table view (hidden on xs screens) */}
      <div className="hidden sm:block">{renderTable()}</div>

      {/* Card view (only visible on xs screens) */}
      <div className="sm:hidden">{renderCards()}</div>
    </>
  );
}
