import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const histroy = useHistory();
  const [user, setUser] = useState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { user_name, email, password, confirm_password } = user;

  const handle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    const payload = { user_name, email, password, confirm_password };

    const data = axios.post("/users", payload);

    if (data.status === 400 || !data) {
      alert("invalid data");
    } else {
      alert("Success");
      histroy.push("/login");
    }
  };

  return (
    <div className="container">
      <h1>
        <img
          src="https://gab.com/packs/media/images/logo-967cf32f5e1a6d10524ceeea220142a9.svg"
          alt="loading"
          height="50px"
        />
      </h1>
      <div className="form">
        <h2>Sign up for Gab</h2>
        <form method="POST">
          <label>Username*</label> <br />
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            value={user_name}
            onChange={handle}
          />
          <br />
          <label>
            Only numbers, letters and underscores allowed. No spaces.
          </label>
          <br />
          <label>E-mail address*</label> <br />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handle}
          />
          <br />
          <br />
          <label>password*</label> <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handle}
          />
          <br />
          <br />
          <label>Confirm password*</label> <br />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm your password"
            value={confirm_password}
            onChange={handle}
          />
          <br />
          <br />
          <button type="submit" onClick={submit}>
            submit
          </button>
          <hr style={{ "margin-top": "30px" }} />
          <label>
            <Link to="/login">Login</Link>
          </label>
        </form>
      </div>
    </div>
  );
};
export default Signup;
