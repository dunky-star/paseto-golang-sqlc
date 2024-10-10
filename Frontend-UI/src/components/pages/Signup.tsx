import { Link } from "react-router-dom";
import "./../common/Signup.css";

export const Signup = () => {
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
