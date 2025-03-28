import { LifeBuoy } from "lucide-react";
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
import { FaqSection } from "./components/faq_section";

export default function SupportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Contact Support</h1>
        <p className="text-muted-foreground mt-2">
          Get help with your FaxPanda account
        </p>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and our support team will get back to you
              as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" placeholder="John Doe" />
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
                We'll use this email to respond to your inquiry
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please describe your issue or question in detail..."
                rows={6}
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full">
              <LifeBuoy className="mr-2 h-4 w-4" />
              Submit Support Request
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-8">
        <FaqSection />
      </div>
    </div>
  );
}
