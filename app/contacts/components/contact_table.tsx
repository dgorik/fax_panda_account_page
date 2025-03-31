"use client";

import { useEffect } from "react";
import { MoreHorizontal, Pencil, Trash, Send } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the contact record type
export interface ContactRecord {
  uiiFaxIdNumber: number;
  name: string;
  faxNumber: string;
  country: string;
  email?: string;
  company?: string;
}

// Contacts data
export const contactsData: ContactRecord[] = [
  {
    uiiFaxIdNumber: 5551234567,
    name: "Sarah Johnson",
    faxNumber: "+1 (555) 123-4567",
    country: "United States",
    email: "sarah.johnson@example.com",
    company: "Acme Corp",
  },
  {
    uiiFaxIdNumber: 5559876543,
    name: "Michael Chen",
    faxNumber: "+1 (555) 987-6543",
    country: "Canada",
    email: "michael.chen@example.com",
    company: "Global Industries",
  },
  {
    uiiFaxIdNumber: 2012345678,
    name: "Emma Wilson",
    faxNumber: "+44 (20) 1234-5678",
    country: "United Kingdom",
    email: "emma.wilson@example.com",
  },
  {
    uiiFaxIdNumber: 9198765432,
    name: "James Rodriguez",
    faxNumber: "+34 (91) 987-6543",
    country: "Spain",
    email: "james.r@example.com",
    company: "Tech Solutions",
  },
  {
    uiiFaxIdNumber: 2987654321,
    name: "Olivia Brown",
    faxNumber: "+61 (2) 9876-5432",
    country: "Australia",
    email: "olivia.brown@example.com",
  },
  {
    uiiFaxIdNumber: 5552345678,
    name: "William Taylor",
    faxNumber: "+1 (555) 234-5678",
    country: "United States",
    email: "william.t@example.com",
    company: "Finance Group",
  },
  {
    uiiFaxIdNumber: 5512345678,
    name: "Sophia Martinez",
    faxNumber: "+52 (55) 1234-5678",
    country: "Mexico",
    email: "sophia.m@example.com",
  },
  {
    uiiFaxIdNumber: 2123456789,
    name: "Benjamin Lee",
    faxNumber: "+82 (2) 1234-5678",
    country: "South Korea",
    email: "ben.lee@example.com",
    company: "Digital Solutions",
  },
  {
    uiiFaxIdNumber: 1198765432,
    name: "Isabella Garcia",
    faxNumber: "+55 (11) 9876-5432",
    country: "Brazil",
    email: "isabella.g@example.com",
  },
  {
    uiiFaxIdNumber: 5553456789,
    name: "Ethan Wright",
    faxNumber: "+1 (555) 345-6789",
    country: "Canada",
    email: "ethan.w@example.com",
    company: "Wright Enterprises",
  },
  {
    uiiFaxIdNumber: 2098765432,
    name: "Mia Thompson",
    faxNumber: "+44 (20) 9876-5432",
    country: "United Kingdom",
    email: "mia.t@example.com",
  },
  {
    uiiFaxIdNumber: 3012345678,
    name: "Alexander Davis",
    faxNumber: "+49 (30) 1234-5678",
    country: "Germany",
    email: "alex.d@example.com",
    company: "Euro Tech",
  },
  {
    uiiFaxIdNumber: 1234567890,
    name: "Charlotte Wilson",
    faxNumber: "+33 (1) 2345-6789",
    country: "France",
    email: "charlotte.w@example.com",
  },
  {
    uiiFaxIdNumber: 612345678,
    name: "Daniel Martin",
    faxNumber: "+39 (06) 1234-5678",
    country: "Italy",
    email: "daniel.m@example.com",
    company: "Martin & Associates",
  },
  {
    uiiFaxIdNumber: 5554567890,
    name: "Amelia Anderson",
    faxNumber: "+1 (555) 456-7890",
    country: "United States",
    email: "amelia.a@example.com",
  },
];

interface ContactsTableProps {
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onTotalPagesChange: (pages: number) => void;
  onFilteredCountChange: (count: number) => void;
}

export function ContactsTable({
  currentPage,
  itemsPerPage,
  onPageChange,
  onTotalPagesChange,
  onFilteredCountChange,
}: ContactsTableProps) {
  // Calculate pagination
  const totalPages = Math.ceil(contactsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = contactsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Update parent component with pagination info using useEffect instead of useState
  useEffect(() => {
    onTotalPagesChange(totalPages);
    onFilteredCountChange(contactsData.length);
  }, [
    totalPages,
    contactsData.length,
    onTotalPagesChange,
    onFilteredCountChange,
  ]);

  // Action handlers (no actual functionality as requested)
  const handleEdit = (uiiFaxIdNumber: number) => {
    // This would normally handle editing the contact
    console.log(`Edit contact ${uiiFaxIdNumber}`);
  };

  const handleDelete = (uiiFaxIdNumber: number) => {
    // This would normally handle deleting the contact
    console.log(`Delete contact ${uiiFaxIdNumber}`);
  };

  const handleSend = (uiiFaxIdNumber: number) => {
    // This would normally handle sending a fax to the contact
    console.log(`Send fax to contact ${uiiFaxIdNumber}`);
  };

  // Desktop/tablet view
  const renderTable = () => (
    <div className="border rounded-md overflow-huiiFaxIdNumberden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[25%]">Name</TableHead>
            <TableHead className="w-[25%]">Fax Number</TableHead>
            <TableHead className="w-[20%]">Country</TableHead>
            <TableHead className="huiiFaxIdNumberden md:table-cell w-[25%]">
              Email
            </TableHead>
            <TableHead className="w-[5%]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.length > 0 ? (
            paginatedData.map((contact) => (
              <TableRow key={contact.uiiFaxIdNumber}>
                <TableCell className="font-medium">
                  <a
                    href={`/contacts/${contact.uiiFaxIdNumber}`}
                    className="hover:underline"
                  >
                    {contact.name}
                    {contact.company && (
                      <div className="text-xs text-muted-foreground">
                        {contact.company}
                      </div>
                    )}
                  </a>
                </TableCell>
                <TableCell>{contact.faxNumber}</TableCell>
                <TableCell>{contact.country}</TableCell>
                <TableCell className="huiiFaxIdNumberden md:table-cell break-words">
                  {contact.email}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleEdit(contact.uiiFaxIdNumber)}
                      >
                        <Pencil className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(contact.uiiFaxIdNumber)}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleSend(contact.uiiFaxIdNumber)}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        <span>Send Fax</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center py-8 text-muted-foreground"
              >
                No contacts found.
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
        paginatedData.map((contact) => (
          <Card key={contact.uiiFaxIdNumber}>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">
                    <a
                      href={`/contacts/${contact.uiiFaxIdNumber}`}
                      className="hover:underline"
                    >
                      {contact.name}
                    </a>
                  </h3>
                  {contact.company && (
                    <p className="text-sm text-muted-foreground">
                      {contact.company}
                    </p>
                  )}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleEdit(contact.uiiFaxIdNumber)}
                    >
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(contact.uiiFaxIdNumber)}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleSend(contact.uiiFaxIdNumber)}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      <span>Send Fax</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="gruiiFaxIdNumber grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Fax Number</p>
                  <p>{contact.faxNumber}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Country</p>
                  <p>{contact.country}</p>
                </div>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Email</p>
                <p className="break-words">{contact.email}</p>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          No contacts found.
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Table view (huiiFaxIdNumberden on xs screens) */}
      <div className="hidden sm:block">{renderTable()}</div>

      {/* Card view (only visible on xs screens) */}
      <div className="sm:hidden">{renderCards()}</div>
    </>
  );
}
