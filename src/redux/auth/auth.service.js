import axios from "axios";
import { API_URL } from "./apiURL";

export const login = async (userData) => {
  const res = await axios.post(API_URL + "login", userData);
  if (res.data.body.token) {
    localStorage.setItem("token", JSON.stringify(res.data.body.token));
    return res.data;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  login,
  logout,
};

export default authService;
