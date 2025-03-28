import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mb-6">
          Find quick answers to common questions about our fax service.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How does online faxing work?</AccordionTrigger>
          <AccordionContent>
            <p>
              Online faxing works by converting your documents into a format
              that can be transmitted over the internet instead of using
              traditional phone lines. With FaxPanda, you can send and receive
              faxes via email, web interface, or mobile app. The recipient can
              receive your fax on a traditional fax machine or as a digital
              document, depending on their setup.
            </p>
            <p className="mt-2">
              Our service acts as a bridge between digital communication and
              traditional fax machines, allowing you to send faxes from anywhere
              without needing physical fax hardware.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What file types can I fax?</AccordionTrigger>
          <AccordionContent>
            <p>FaxPanda supports a wide range of file formats, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>PDF documents (.pdf)</li>
              <li>
                Microsoft Office files (.doc, .docx, .xls, .xlsx, .ppt, .pptx)
              </li>
              <li>Image files (.jpg, .jpeg, .png, .tif, .tiff, .gif)</li>
              <li>Text files (.txt, .rtf)</li>
              <li>HTML files (.html, .htm)</li>
            </ul>
            <p className="mt-2">
              If you need to send a file type not listed here, you can convert
              it to PDF format before sending.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            How many credits do I need to send a fax?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              The number of credits required to send a fax depends on several
              factors:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Domestic faxes typically cost 1 credit per page</li>
              <li>
                International faxes range from 2-5 credits per page depending on
                the destination country
              </li>
              <li>High-resolution faxes may require additional credits</li>
              <li>Faxes with color content may require additional credits</li>
            </ul>
            <p className="mt-2">
              You can view the exact credit cost before sending your fax. We
              also offer volume discounts when purchasing larger credit
              packages.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Is online faxing secure and compliant?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Yes, FaxPanda takes security and compliance seriously. Our service
              includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>End-to-end encryption for all fax transmissions</li>
              <li>Password-protected fax delivery options</li>
              <li>HIPAA compliance for healthcare-related faxes</li>
              <li>SOC 2 Type II certification for our data centers</li>
              <li>Secure user authentication and access controls</li>
            </ul>
            <p className="mt-2">
              We maintain strict privacy policies and never share your data with
              third parties. For regulated industries, we provide detailed audit
              logs and compliance reports.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            How do I know if my fax was delivered successfully?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              FaxPanda provides comprehensive delivery confirmation through
              multiple channels:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Real-time status updates in your dashboard</li>
              <li>Email notifications with delivery confirmations</li>
              <li>Detailed transmission reports available for download</li>
              <li>
                Delivery receipts with timestamps and confirmation numbers
              </li>
            </ul>
            <p className="mt-2">
              You can also track all your sent and received faxes in the Fax
              History section of your account. If a fax fails to deliver, you'll
              receive an immediate notification with the reason for the failure
              and suggestions for resolving the issue.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
