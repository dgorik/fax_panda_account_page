import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TransactionHistory() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Mar 15, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <ArrowDownCircle className="mr-2 h-4 w-4 text-green-500" />
                  Credit card deposit
                </div>
              </TableCell>
              <TableCell className="text-right text-green-600">
                +$20.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Mar 10, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <ArrowUpCircle className="mr-2 h-4 w-4 text-red-500" />
                  Fax to +1 (555) 123-4567
                </div>
              </TableCell>
              <TableCell className="text-right text-red-600">-$2.25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Feb 28, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <ArrowDownCircle className="mr-2 h-4 w-4 text-green-500" />
                  PayPal deposit
                </div>
              </TableCell>
              <TableCell className="text-right text-green-600">
                +$30.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Feb 25, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <ArrowUpCircle className="mr-2 h-4 w-4 text-red-500" />
                  Fax to +44 (20) 1234-5678
                </div>
              </TableCell>
              <TableCell className="text-right text-red-600">-$2.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Feb 20, 2023</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <ArrowUpCircle className="mr-2 h-4 w-4 text-red-500" />
                  Fax to +1 (555) 987-6543
                </div>
              </TableCell>
              <TableCell className="text-right text-red-600">-$2.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
