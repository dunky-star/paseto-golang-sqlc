import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9090",
});

// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   async (error: AxiosError) => {
//     if (error?.response?.status === 401 && !error?.config?._retry) {
//

// if reponse = 401
// use refresh toke to generate new access token
// if access toke generation loginSuccessful, continue with request
// if not , log out the user completely

//     }
//   }
// );

export default axiosInstance;
