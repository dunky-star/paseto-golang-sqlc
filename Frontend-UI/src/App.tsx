import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Signup } from "./components/pages/Signup";
import { Login } from "./components/pages/Login";
import { UserChallenge } from "./components/pages/UserChallenge";
import { ProtectedRoutes } from "./components/common/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { getUserDetails } from "./globalState/redux/slice/authSlice";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();
  const getUserDetail = () => {
    const userToken = localStorage.getItem("accessToken");
    // get user details with the token
    if (userToken) {
      dispatch(getUserDetails({ name: "justine" }));
    }
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UserChallenge />} />
    </Routes>
  );
};
