import React, { useState } from "react";
import "./Contact.css";
function ContactForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [allValue, setAllValue] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newValue = { fname, lname, phone, email, subject, company, message };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setCompany("");
    setMessage("");
  };
  return (
    <React.Fragment>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Contact Form</h2>
            <p>Fill out the form below, we will get back you soon.</p>

            <form onSubmit={formSubmitHandler}>
              <div className="grid1">
                <div className="input">
                  <span>
                    First name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    Last name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    Phone number <label>*</label>
                  </span>
                  <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    Subject <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    Company <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                
              </div>
              <div className="input inputlast">
                  <span>
                    Message <label>*</label>
                  </span>
                  <textarea
                    name="message"
                    value={message}
                    cols="30"
                    row="10"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

              <button className="primary-btn">Submit now</button>
            </form>
          </div>

          <div className="side-content">
            <h3>Visit our location</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae incidunt recusandae temporibus nesciunt dolorem autem
              rem, odit, ab quibusdam, nostrum aperiam odio excepturi libero.
              Autem qui sequi aliquid harum illum.
            </p>
            <br />
            <h3>
                Message us
            </h3>
            <span>
                info@gmail.com
            </span>
            <br />
            <span>+123 456 789</span>
            <br />

            <div className="icon">
                <h3>Follow us</h3>
                <div className="flex_space">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-tiktok"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-pinterest"></i>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((curValue) => {
          const { fname, lname, phone, email, subject, company, message } =
            curValue;
          return (
            <div className="sing-box">
              <h1>Send successfully!</h1>
              <h3>
                First name: <p>{fname}</p>
              </h3>
              <h3>
                Last name: <p>{lname}</p>
              </h3>
              <h3>
                Phone number: <p>{phone}</p>
              </h3>
              <h3>
                Email: <p>{email}</p>
              </h3>
              <h3>
                Subject: <p>{subject}</p>
              </h3>
              <h3>
                Company: <p>{company}</p>
              </h3>
              <h3>
                Message: <p>{message}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default ContactForm;
