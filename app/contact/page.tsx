import ContactForm from "@/components/contactPage/ContactForm";
import React from "react";

const page = () => {
  return (
    <section className="space-y-4">
      <h1 className="font-display text-xl font-semibold">
        Let&apos;s get in touch!
      </h1>
      <ContactForm />
    </section>
  );
};

export default page;
