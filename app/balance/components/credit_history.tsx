import { ArrowDownCircle, CreditCard, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CreditHistory() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Credits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Mar 15, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <ArrowDownCircle className="mr-2 h-4 w-4 text-green-500" />
                  Credit card purchase
                </div>
              </TableCell>
              <TableCell className="text-right text-green-600">
                +20 credits
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Mar 10, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Send className="mr-2 h-4 w-4 text-red-500" />
                  Fax to +1 (555) 123-4567
                </div>
              </TableCell>
              <TableCell className="text-right text-red-600">
                -2 credits
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Feb 28, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4 text-green-500" />
                  Promotional bonus
                </div>
              </TableCell>
              <TableCell className="text-right text-green-600">
                +5 credits
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Feb 25, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <ArrowDownCircle className="mr-2 h-4 w-4 text-green-500" />
                  PayPal purchase
                </div>
              </TableCell>
              <TableCell className="text-right text-green-600">
                +30 credits
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Feb 20, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Send className="mr-2 h-4 w-4 text-red-500" />
                  Fax to +1 (555) 987-6543
                </div>
              </TableCell>
              <TableCell className="text-right text-red-600">
                -2 credits
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
