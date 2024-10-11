import axiosInstance from "../axios/axiosInstance";

export const login = async (loginParams: {
  username: string;
  password: string;
}) => {
  return axiosInstance.post("/users/login", {
    username: loginParams.username,
    password: loginParams.password,
  });
};
