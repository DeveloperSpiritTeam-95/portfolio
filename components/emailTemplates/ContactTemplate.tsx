import { contactFormSchema } from "@/app/actions/contactForm/validator";
import React from "react";
import { z } from "zod";

const ContactTemplate = ({
  email,
  message,
  name,
}: z.infer<typeof contactFormSchema>) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email : {email}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default ContactTemplate;
