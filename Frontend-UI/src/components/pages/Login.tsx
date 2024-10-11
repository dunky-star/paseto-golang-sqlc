import { useState } from "react";
import "../common/Login.css";
import { login } from "../../client/api/auth/login";
import {
  loginSuccessful,
  setError,
} from "../../globalState/redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(
    (state: { auth: { error: string } }) => state.auth
  );
  const [formData, setFormData] = useState({ username: "", password: "" });

  const onChangeFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Make an API call or handle login logic here
    try {
      const response = await login({
        username: formData.username,
        password: formData.password,
      });

      dispatch(
        loginSuccessful({
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
        })
      );
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError("An unknown error occurred"));
      }
    }
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
      <span>
        <i>{authState.error}</i>
      </span>
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
          value={formData.password}
          onChange={onChangeFormValue}
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
