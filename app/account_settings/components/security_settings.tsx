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
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Shield, LogOut } from "lucide-react";

export default function SecuritySettings() {
  return (
    <div>
      <Tabs defaultValue="security" className="space-y-6">
        <TabsContent value="security" className="space-y-6">
          {/* Password Management */}
          <Card>
            <CardHeader>
              <CardTitle>Password Management</CardTitle>
              <CardDescription>
                Update your password to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
                <p className="text-sm text-muted-foreground">
                  Password must be at least 8 characters and include a number
                  and a special character.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          {/* Two-Factor Authentication */}
          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>
                Add an extra layer of security to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">
                    Require a verification code when logging in
                  </p>
                </div>
                <Switch defaultChecked={false} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">SMS Authentication</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive verification codes via SMS
                  </p>
                </div>
                <Switch defaultChecked={false} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Authenticator App</h4>
                  <p className="text-sm text-muted-foreground">
                    Use an authenticator app for verification codes
                  </p>
                </div>
                <Switch defaultChecked={false} />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Setup Two-Factor Authentication</Button>
            </CardFooter>
          </Card>

          {/* Session Management */}
          <Card>
            <CardHeader>
              <CardTitle>Session Management</CardTitle>
              <CardDescription>
                Manage your active sessions and login history
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Active Sessions</h4>
                <div className="space-y-4">
                  <div className="flex items-start justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Chrome on Windows</p>
                      <p className="text-sm text-muted-foreground">
                        Current session
                      </p>
                      <p className="text-xs text-muted-foreground">
                        IP: 192.168.1.1 • Last active: Just now
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-green-500">
                        This device
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Safari on macOS</p>
                      <p className="text-xs text-muted-foreground">
                        IP: 192.168.1.2 • Last active: 2 days ago
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">FaxPanda Mobile App</p>
                      <p className="text-xs text-muted-foreground">
                        IP: 192.168.1.3 • Last active: 5 days ago
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Sign Out All Other Devices
              </Button>
            </CardFooter>
          </Card>

          {/* Security Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Security Notifications</CardTitle>
              <CardDescription>
                Manage how you receive security alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Email Alerts</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive security alerts via email
                  </p>
                </div>
                <Switch defaultChecked={true} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">New Login Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Get notified when your account is accessed from a new device
                  </p>
                </div>
                <Switch defaultChecked={true} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Password Change Alerts</h4>
                  <p className="text-sm text-muted-foreground">
                    Get notified when your password is changed
                  </p>
                </div>
                <Switch defaultChecked={true} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
