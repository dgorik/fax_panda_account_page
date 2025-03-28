import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SendFaxPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Send Fax</h1>
        <p className="text-muted-foreground mt-2">
          Send a fax to your recipient
        </p>
      </div>

      <div className="mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Recipient Information</CardTitle>
            <CardDescription>
              Enter the details of the person you want to send a fax to.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipientName">Recipient Name</Label>
              <Input
                id="recipientName"
                name="recipientName"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+1 (555) 123-4567"
              />
              <p className="text-xs text-muted-foreground">
                Enter the full phone number including country code
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
              />
              <p className="text-xs text-muted-foreground">
                Optional: For delivery confirmation
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message here..."
                rows={5}
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Fax
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
