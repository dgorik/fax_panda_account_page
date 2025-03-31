import { ContactForm } from "./components/contact_form";
import { FaqSection } from "./components/faq_section";

export default function SupportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Contact Support</h1>
        <p className="text-muted-foreground my-2">
          Get help with your FaxPanda account
        </p>
        <ContactForm />
      </div>
      <div className="">
        <FaqSection />
      </div>
    </div>
  );
}
