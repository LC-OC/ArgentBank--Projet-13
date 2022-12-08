import axios from "axios";
import { API_URL } from "../auth/apiURL";
import authHeader from "../header";

export const getUserProfile = async () => {
  return await axios({
    method: "POST",
    url: API_URL + "profile",
    headers: authHeader(),
  });
};

const userService = {
  getUserProfile,
};

export default userService;
