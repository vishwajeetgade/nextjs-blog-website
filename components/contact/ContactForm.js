import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
import Notification from "../ui/Notification";

const NOTIFICATION = {
  pending: {
    status: "pending",
    title: "Sending message....",
    message: "Your message is on its way!",
  },
  success: {
    status: "success",
    title: "Success!",
    message: "Message sent successfully!",
  },
  error: {
    status: "error",
    title: "Error",
    message: "Something went wrong, try again in sometimes",
  },
};

async function sendContactDetails(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactDetails),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(null); //'pending', 'success', 'error'
  const [requestError, setRequestError] = useState(null);

  useEffect(() => {
    let timer = null;
    if (requestStatus === "success" || requestStatus === "error") {
      timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [requestStatus]);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    setRequestStatus("pending");
    try {
      await sendContactDetails({
        email,
        name,
        message,
      });
      setRequestStatus("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={handleSendMessage}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              value={email}
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              value={name}
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            value={message}
            id="message"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {requestStatus && (
        <Notification
          {...NOTIFICATION[requestStatus]}
          message={
            requestStatus === "error"
              ? requestError
              : NOTIFICATION[requestStatus].message
          }
        />
      )}
    </section>
  );
};

export default ContactForm;
