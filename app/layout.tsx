import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app_sidebar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FaxPanda",
  description: "Online fax sending application",
};

export default function RootLayout({
  //this accepts children props (special props that allow compnents to wrap other components inside them)
  children,
}: {
  children: React.ReactNode; //meaning it can contain JSX elements, Strings, Numbers and other react components
}) {
  return (
    <html lang="en">
      <body>
        {/* Sidebar provider handles collapsable state */}
        <SidebarProvider>
          <AppSidebar />
          {/*  */}
          <SidebarInset>
            {/* sticky top-0 flex h-16 items-center justify-between gap-2 border-b bg-background px-4 */}
            <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-background p-4">
              <div className="flex items-center">
                <SidebarTrigger />
                <p className="text-lg font-semibold">
                  <Link href="/account">FaxPanda</Link>
                </p>
              </div>
              <Button>Logout</Button>
            </header>
            <main className="p-4 md:p-6">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
