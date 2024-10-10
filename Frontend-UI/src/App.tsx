import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Signup } from "./components/pages/Signup";
import { Login } from "./components/pages/Login";
import { UserChallenge } from "./components/pages/UserChallenge";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UserChallenge />} />
    </Routes>
  );
};
