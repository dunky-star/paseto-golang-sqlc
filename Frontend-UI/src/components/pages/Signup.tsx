import { Link } from "react-router-dom";
import "./../common/Signup.css";

export const Signup = () => {
  return (
    <div className="container">
      <div className="center">
        <h1>Sign up</h1>
        <form>
          <div className="txt_field">
            <input type="text" name="" id="name" required></input>
            <span></span>
            <label htmlFor="name">Username</label>
          </div>
          <div className="txt_field">
            <input type="email" name="email" id="email" required></input>
            <span></span>
            <label htmlFor="email">Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              id="password"
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
              required
            ></input>
            <span></span>
            <label htmlFor="cpassword">Confirm Password</label>
          </div>
          <input name="submit" type="Submit" value="Register"></input>
          <div className="signup_link">
            Have an Account ? <Link to="/login">Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
