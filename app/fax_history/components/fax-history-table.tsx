"use client";

import { useState } from "react";
import { Check, Clock, X } from "lucide-react";
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

// Define the fax record type
export interface FaxRecord {
  id: number;
  date: string;
  recipient: string;
  email: string;
  country: string;
  status: "successful" | "pending" | "failed";
}

// Fax history data
const faxHistoryData: FaxRecord[] = [
  {
    id: 1,
    date: "2023-03-15T09:23:45",
    recipient: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    country: "United States",
    status: "successful",
  },
  {
    id: 2,
    date: "2023-03-12T14:05:22",
    recipient: "Michael Chen",
    email: "michael.chen@example.com",
    country: "Canada",
    status: "failed",
  },
  {
    id: 3,
    date: "2023-03-10T11:30:15",
    recipient: "Emma Wilson",
    email: "emma.wilson@example.com",
    country: "United Kingdom",
    status: "successful",
  },
  {
    id: 4,
    date: "2023-03-05T16:42:30",
    recipient: "James Rodriguez",
    email: "james.r@example.com",
    country: "Spain",
    status: "pending",
  },
  {
    id: 5,
    date: "2023-03-01T08:15:00",
    recipient: "Olivia Brown",
    email: "olivia.brown@example.com",
    country: "Australia",
    status: "successful",
  },
  {
    id: 6,
    date: "2023-02-28T13:20:45",
    recipient: "William Taylor",
    email: "william.t@example.com",
    country: "United States",
    status: "successful",
  },
  {
    id: 7,
    date: "2023-02-25T10:05:30",
    recipient: "Sophia Martinez",
    email: "sophia.m@example.com",
    country: "Mexico",
    status: "failed",
  },
  {
    id: 8,
    date: "2023-02-20T15:45:10",
    recipient: "Benjamin Lee",
    email: "ben.lee@example.com",
    country: "South Korea",
    status: "successful",
  },
  {
    id: 9,
    date: "2023-02-18T09:30:00",
    recipient: "Isabella Garcia",
    email: "isabella.g@example.com",
    country: "Brazil",
    status: "pending",
  },
  {
    id: 10,
    date: "2023-02-15T14:10:25",
    recipient: "Ethan Wright",
    email: "ethan.w@example.com",
    country: "Canada",
    status: "successful",
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
  const filteredData = faxHistoryData.filter((fax) => {
    return statusFilter === "all" || fax.status === statusFilter;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Update parent component with pagination info
  useState(() => {
    onTotalPagesChange(totalPages);
    onFilteredCountChange(filteredData.length);
  });

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
            <TableHead className="w-[20%]">Date</TableHead>
            <TableHead className="w-[20%]">Recipient</TableHead>
            <TableHead className="hidden sm:table-cell w-[25%]">
              Email
            </TableHead>
            <TableHead className="hidden md:table-cell w-[15%]">
              Country
            </TableHead>
            <TableHead className="w-[20%]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((fax) => (
              <TableRow key={fax.id}>
                <TableCell className="font-medium break-words">
                  {formatDate(fax.date)}
                </TableCell>
                <TableCell className="break-words">{fax.recipient}</TableCell>
                <TableCell className="hidden sm:table-cell break-words">
                  {fax.email}
                </TableCell>
                <TableCell className="hidden md:table-cell break-words">
                  {fax.country}
                </TableCell>
                <TableCell>{renderStatusBadge(fax.status)}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
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
                  <p className="text-sm text-muted-foreground">{fax.email}</p>
                </div>
                <div>{renderStatusBadge(fax.status)}</div>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-muted-foreground">Date</p>
                  <p>{formatDate(fax.date)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Country</p>
                  <p>{fax.country}</p>
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
