import axios from "axios";
import { API_URL } from "../apiURL";
import authHeader from "./auth-header";

export async function getUserProfile() {
  return await axios({
    method: "POST",
    url: API_URL + "profile",
    headers: authHeader(),
  });
}

const userService = {
  getUserProfile,
};

export default userService;
