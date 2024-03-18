"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "@/app/styles/contact.module.css";

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields must be filled out");
      return;
    }

    emailjs
      .sendForm(
        "service_zz58j2c",
        "template_hv656kl",
        form.current,
        "2Pg_QENVYuxD8e3ur"
      )
      .then(
        (result) => {
          alert("Email successfully sent");
          resetForm();
        },
        (error) => {
          console.log("Send email error:", error.text);
        }
      );
  };

  return (
    <div className={style.background}>
      <div className={style.info}></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className={style.inputFormContainer}
      >
        <div>
          <h1>Contact</h1>
          <p>
            {" "}
            Shoot me a message below or feel to free to reach out on{" "}
            <a href="https://www.linkedin.com/in/noah-giboney-896847261/" target="_blank">LinkedIn.</a>
          </p>
        </div>

        <input
          placeholder="Your Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          id="inputName"
        />
        <input
          placeholder="Your Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          id="inputEmail"
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          id="inputMessage"
        />
        <div className={style.buttonContainer}>
          <button type="submit" value="Send" className={style.button}>
            Send
          </button>
          <button
            type="button"
            value="Reset"
            className={style.button}
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
