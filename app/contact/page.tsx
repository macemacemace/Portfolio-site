import type { Metadata } from "next";
import ContactEmail from "@/components/ContactEmail";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Martin Jakovoski.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100dvh-18rem)] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-ink sm:text-5xl">Get in touch</h1>
      <p className="mt-4 max-w-md text-ink-2">
        Open to opportunities and always happy to connect. Click below to grab
        my email.
      </p>
      <div className="mt-8">
        <ContactEmail />
      </div>
    </div>
  );
}
