export const Login = () => {
  return (
    <form className="form">
      <h4>Login</h4>
      <div className="form-row">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input type="text" name="" id="username" className="form-input"></input>
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name=""
          id="password"
          className="form-input"
        ></input>
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
