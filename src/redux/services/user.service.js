import axios from "axios";
import { API_URL } from "../apiURL";
import authHeader from "./auth-header";

export const userProfile = async (userProfile) => {
  try {
    const res = await axios.post(API_URL + "profile", {
      userProfile,
      authHeader,
    });
    return res.data.body;
  } catch (err) {
    console.log("les calculs sont toujours pas bons kev");
  }
};
