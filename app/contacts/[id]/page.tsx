"use client";

import React from "react";

import { useState, useEffect } from "react";
import { ArrowLeft, Send, Phone, Mail, MapPin, Building } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

import {
  contactsData,
  type ContactRecord,
} from "@/app/contacts/components/contact_table";

import { faxHistoryTable } from "@/app/fax_history/components/fax-history-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ContactDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrappedParams = React.use(params);
  const contactId = Number.parseInt(unwrappedParams.id);
  const [contact, setContact] = useState<ContactRecord | null>(null);
  const [contactFaxes, setContactFaxes] = useState<typeof faxHistoryTable>([]);

  useEffect(() => {
    // Find the contact by ID
    const foundContact =
      contactsData.find((c) => c.uiiFaxIdNumber === contactId) || null;
    setContact(foundContact);

    // Filter fax history for this contact based on matching fax number
    if (foundContact) {
      const filteredFaxes = faxHistoryTable.filter(
        (fax) => fax.faxNumber === foundContact.faxNumber
      );
      setContactFaxes(filteredFaxes);
    }
  }, [contactId]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
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
            className="bg-green-50 text-green-700 border-green-200"
          >
            Successful
          </Badge>
        );
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700 border-yellow-200"
          >
            Pending
          </Badge>
        );
      case "failed":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200"
          >
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  if (!contact) {
    return (
      <div className="container mx-auto py-6">
        <div className="flex items-center mb-6">
          <Link href="/contacts" className="mr-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Contacts
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Contact Not Found</h1>
        </div>
        <Card>
          <CardContent className="p-6">
            <p>The requested contact could not be found.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Link href="/contacts" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Contacts
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">{contact.name}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Contact Information Card */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contact.company && (
                <div className="flex items-start">
                  <Building className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Company</p>
                    <p>{contact.company}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Fax Number</p>
                  <p>{contact.faxNumber}</p>
                </div>
              </div>

              {contact.email && (
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="break-words">{contact.email}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Country</p>
                  <p>{contact.country}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4">
            <Button className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Fax
            </Button>
          </div>
        </div>

        {/* Fax History */}
        <div className="md:col-span-2">
          <Tabs defaultValue="fax-history">
            <TabsList>
              <TabsTrigger value="fax-history">Fax History</TabsTrigger>
            </TabsList>

            <TabsContent value="fax-history" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  {contactFaxes.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[25%]">Fax ID</TableHead>
                          <TableHead className="w-[25%]">Date</TableHead>
                          <TableHead className="w-[25%]">Cost</TableHead>
                          <TableHead className="w-[25%]">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contactFaxes.map((fax) => (
                          <TableRow key={fax.id}>
                            <TableCell title={fax.faxId}>
                              {formatUUID(fax.faxId)}
                            </TableCell>
                            <TableCell>{formatDate(fax.date)}</TableCell>
                            <TableCell>${fax.creditCost.toFixed(2)}</TableCell>
                            <TableCell>
                              {renderStatusBadge(fax.status)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="p-6 text-center text-muted-foreground">
                      No fax history found for this contact.
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
