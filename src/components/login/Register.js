import React, { useState } from "react";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import "./Register.css";
const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rewPass, setRewPass] = useState("");
  const [allValue, setAllValue] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      fname.trim() === "" ||
      lname.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      rewPass.trim() === ""
    ){
      return;
    }
    console.log(fname);
    const newValue = { fname, lname, phone, email, password, rewPass };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setPassword("");
    setRewPass("");
  };
  return (
    <React.Fragment>
      <HeadTitle />
      <section className="register mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Register Form</h2>
            <p>Fill out the form below to register.</p>

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
                    Password <label>*</label>
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    Re-type password <label>*</label>
                  </span>
                  <input
                    type="password"
                    name="rewPass"
                    value={rewPass}
                    onChange={(e) => setRewPass(e.target.value)}
                  />
                </div>
              </div>
              <button className="primary-btn">Submit now</button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
