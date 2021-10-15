import { FC, useState } from "react";
import styles from "../../styles/contact-form.module.css";

interface props {}

const ContactForm: FC<props> = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  const sendMessageHandler = (e: any) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <section className={styles.contact}>
      <h1>How Can i help You?</h1>
      <form onSubmit={sendMessageHandler} className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">your email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">your Name</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setname(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">your message</label>
          <textarea
            id="message"
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
