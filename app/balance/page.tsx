import { CreditCard, DollarSign } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TransactionHistory } from "@/app/balance/components/transaction_history";
import { CreditHistory } from "./components/credit_history";

export default function BalancePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Balance Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account balance and add funds
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Current Balance Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Current Balance</CardTitle>
            <CardDescription>
              Your available funds for sending faxes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/10 p-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Available Balance
                  </p>
                  <p className="text-3xl font-bold">$45.75</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Last deposit: $20.00 on Mar 15, 2023
            </div>
          </CardContent>
        </Card>

        {/* Add Funds Card */}
        <Card>
          <CardHeader>
            <CardTitle>Add Funds</CardTitle>
            <CardDescription>Deposit money to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                  $
                </span>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="0.00"
                  min="5"
                  step="0.01"
                  className="rounded-l-none"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Minimum deposit: $5.00
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select>
                <SelectTrigger id="paymentMethod">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="creditCard">Credit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bankTransfer">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full">
              <CreditCard className="mr-2 h-4 w-4" />
              Add Funds
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Transaction History */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <TransactionHistory />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Credit History</h2>
        <CreditHistory />
      </div>
    </div>
  );
}
