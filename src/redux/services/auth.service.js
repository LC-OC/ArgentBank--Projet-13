/*import axios from "axios";
import { API_URL } from "../apiURL";

export const login = async (userIdentifiants) => {
  try {
    const res = await axios.post(API_URL + "login", userIdentifiants);
    if (res.data.body.token) {
      localStorage.setItem("token", JSON.stringify(res.data.body.token));
    }
    return res.data;
  } catch (err) {
    console.log("les calculs sont pas bons Kevin !");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
*/

import axios from "axios";
import { API_URL } from "../apiURL";
import authHeader from "./auth-header";

export async function login(userData) {
  return await axios({
    method: "POST",
    url: API_URL + "login",
    data: userData,
  }).then((res) => {
    if (res.data.body.token) {
      localStorage.setItem("token", JSON.stringify(res.data.body.token));
      return res.data;
    }
  });
}

export async function getUserProfile() {
  return await axios({
    method: "POST",
    url: API_URL + "profile",
    headers: authHeader(),
  });
}

const authService = {
  login,
  getUserProfile,
};

export default authService;
