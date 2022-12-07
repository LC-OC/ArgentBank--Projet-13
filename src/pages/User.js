import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../redux/services/auth.slice";
import WelcomeUser from "../components/WelcomeUser";
import HeaderUser from "../components/HeaderUser";
import Footer from "../components/Footer";
import BankAccount from "../components/BankAccount";

const User = () => {
  return (
    <div>
      <HeaderUser />
      <WelcomeUser />
      <BankAccount />
      <Footer />
    </div>
  );
};

export default User;
