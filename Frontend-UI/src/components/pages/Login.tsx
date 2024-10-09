import { useState } from "react";

export const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });

  const onChangeFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Do something
    console.log(formData.username);
    console.log(formData.password);

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
          value={formData.username}
          onChange={(e) => onChangeFormValue(e)}
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
          value={formData.password}
          onChange={(e) => onChangeFormValue(e)}
        ></input>
      </div>
      <button
        type="submit"
        onClick={(e) => handleLogin(e)}
        className="btn btn-block"
        disabled={!formData.username || !formData.password}
      >
        Submit
      </button>
    </form>
  );
};
