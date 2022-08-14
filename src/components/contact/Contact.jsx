import { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Location from "../../images/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
const Contact = () => {
  const fromref = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xjor4v4",
        "template_910nivc",
        fromref.current,
        "1aV75zO0_APapLcQV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              03206851690
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              se.m.haddi@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Location} alt="" className="c-icon" />
              Superior University Gold Campus
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-decs">
            <p>
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
          </div>
          <form ref={fromref} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              name="user_name"
              placeholder="Name"
              id="name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              name="user_subject"
              placeholder="Subject"
              id="subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              name="user_email"
              placeholder="Email"
              id="email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              rows="5"
              placeholder="Message"
              id="message"
            />
            <button>Submit</button>
            <b>{done && "Thank you.."}</b>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
