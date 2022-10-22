import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Contact.css";
import Button from "./Button";

function Contact({ addMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !message) {
      alert("Please add message");
      return false;
    } else {
      addMessage({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      document.querySelector("input").focus();
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <textarea
          maxLength={1000}
          name="message"
          id="message"
          cols="30"
          rows="15"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        >
          Your message
        </textarea>
        <Button type="submit" text={"Send Message"} />
      </form>
    </div>
  );
}

export default Contact;
