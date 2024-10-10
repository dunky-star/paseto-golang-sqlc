import { Link } from "react-router-dom";
import "./../common/Signup.css";
import { useState } from "react";

export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((user) => ({
      ...user, // Spread the previous user state to keep other fields intact
      [name]: value, // Dynamically update the specific field based on the input name
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something
  };

  return (
    <div className="container mt-15">
      <div className="center">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={handleChange}
              required
            ></input>
            <span></span>
            <label htmlFor="username">Username</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={user.fullname}
              onChange={handleChange}
              required
            ></input>
            <span></span>
            <label htmlFor="fullname">Full name</label>
          </div>
          <div className="txt_field">
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              required
            ></input>
            <span></span>
            <label htmlFor="email">Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              required
            ></input>
            <span></span>
            <label htmlFor="password">Password</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              value={user.cpassword}
              onChange={handleChange}
              required
            ></input>
            <span></span>
            <label htmlFor="cpassword">Confirm Password</label>
          </div>
          <button type="submit" name="submit">
            Register
          </button>

          <div className="signup_link">
            Have an Account ? <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
