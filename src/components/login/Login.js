import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid,setIsValid] = useState(false);
  const [allValue, setAllValue] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(email.trim() === '' || password.trim() === ''){
      return;
    }

    setIsValid(true);
    const newValue = { email, password };
    setAllValue([...allValue, newValue]);

    setEmail("");
    setPassword("");
  };
  return (
    <React.Fragment>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>
              Enter your email and password below to log in to your account and
              use the benefits of our website.
            </p>

            <form onSubmit={formSubmitHandler}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <div className="flex_space">
                <div className="flex">
                  <input type="checkbox" />
                  <label>Remember password</label>
                </div>

                <div className="flex">
                  <span>I forgot my password</span>
                </div>
              </div>
              <button className="primary-btn" type="submit">
                Sign in
              </button>
              <p>
                Don't have account? <Link to="/register">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
