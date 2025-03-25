"use client";
import {
  LayoutDashboard,
  Clock,
  Send,
  LifeBuoy,
  CreditCard,
  Users,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Navigation items
const items = [
  {
    title: "Dashboard Overview",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    title: "Fax History",
    href: "/fax_history",
    icon: Clock,
  },
  {
    title: "Send Fax",
    href: "/send",
    icon: Send,
  },
  {
    title: "Support",
    href: "/support",
    icon: LifeBuoy,
  },
  {
    title: "Balance Management",
    href: "/balance",
    icon: CreditCard,
  },
  {
    title: "Contacts",
    href: "/contacts",
    icon: Users,
  },
  {
    title: "Account Settings",
    href: "/account_settings",
    icon: Settings,
  },
];

// Mock user data (in a real app, this would come from your auth provider)
const userData = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/placeholder.svg",
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
            FP
          </div>
          <div className="font-semibold text-lg">FaxPanda</div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="gap-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-muted">
            <img
              src={userData.avatar || "/placeholder.svg"}
              alt="User avatar"
              className="h-full w-full rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{userData.name}</p>
            <p className="text-xs text-muted-foreground">{userData.email}</p>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
