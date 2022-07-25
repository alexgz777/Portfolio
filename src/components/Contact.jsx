import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import strings from "../assets/languages/about";

const Contact = ({ language }) => {
  const initialState = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState({});

  const [button, setButton] = useState(true);
  useEffect(() => {
    if (
      form.Name.length > 0 &&
      form.Email.length > 0 &&
      form.Subject.length > 0 &&
      form.Message.length > 0
    )
      setButton(false);
    else setButton(true);
  }, [form, setButton]);

  const emailValidate = (email) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(String(email).toLowerCase());
  };
  const handleValidate = (inputs) => {
    const errors = {};
    if (emailValidate(inputs.Email)) {
      document.querySelector(".button").disabled = true;
      errors.Email = strings.languageErrors[language].Email;
    }
    if (!inputs.Name) {
      document.querySelector(".button").disabled = true;
      errors.Name = strings.languageErrors[language].Name;
    }
    if (!inputs.Message) {
      document.querySelector(".button").disabled = true;
      errors.Message = strings.languageErrors[language].Message;
    }
    document.querySelector(".button").disabled = false;
    return errors;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(
      handleValidate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div id="Contact" className="contact">
      <div className="contact__title">
        <h1>{strings.languageContact[language].question}</h1>
        <h2>{strings.languageContact[language].answer}</h2>
      </div>
      <form name="contact" method="post" className="form">
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="Name"
          value={form.Name}
          name="Name"
          placeholder={strings.languageContact[language].name}
          onChange={(e) => handleChange(e)}
        />
        <p className="error">{error.Name}</p>
        <input
          className="Email"
          value={form.Email}
          name="Email"
          placeholder={strings.languageContact[language].email}
          onChange={(e) => handleChange(e)}
        />
        <p className="error">{error.Email}</p>
        <input
          className="Subject"
          value={form.Subject}
          name="Subject"
          placeholder={strings.languageContact[language].subject}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="Message"
          value={form.Message}
          name="Message"
          placeholder={strings.languageContact[language].message}
          onChange={(e) => handleChange(e)}
        />
        <p className="error">{error.Message}</p>
        <button className="button__contact" disabled={button} type="submit">
          {strings.languageContact[language].send}
        </button>
      </form>
    </div>
  );
};

export default Contact;
