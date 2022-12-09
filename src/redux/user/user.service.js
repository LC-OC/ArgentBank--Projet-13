import axios from "axios";
import { API_URL } from "../auth/apiURL";
import authHeader from "../header";

const getUserProfile = async () => {
  return await axios({
    method: "POST",
    url: API_URL + "profile",
    headers: authHeader(),
  });
};

const updateUserName = async (userName) => {
  const res = await axios({
    method: "PUT",
    url: API_URL + "profile",
    headers: authHeader(),
    data: userName,
  });
  return res.data;
};

const userService = {
  getUserProfile,
  updateUserName,
};

export default userService;
