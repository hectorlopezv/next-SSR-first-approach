import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../../components/contact/contact-form";
const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="send your messages" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
