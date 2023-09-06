import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="NextJs blog contact us page"
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
