import { useState } from "react";
import "../common/Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [formData, setFormData] = useState({ username: "", password: "" });

  const onChangeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
    //setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Make an API call or handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // Do something
    // console.log(formData.username);
    // console.log(formData.password);

    // make call to api to login
    // reducers - action
    // login action (username, password)
    //
    // isLogged in
    // pick localstore -> backend -> 401, gotbackend using refreh

    // if login succesfull
    // - store tocken to localstorage
    // naigate to start page
  };

  return (
    <form className="form">
      <h4>Login</h4>
      <div className="form-row">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-input"
          value={username}
          onChange={onChangeFormValue}
        ></input>
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-input"
          value={password}
          onChange={onChangeFormValue}
        ></input>
      </div>
      <button
        type="submit"
        onClick={(e) => handleLogin(e)}
        className="btn btn-block"
        disabled={!username || !password}
      >
        Submit
      </button>
    </form>
  );
};
