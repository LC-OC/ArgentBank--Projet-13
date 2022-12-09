import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userProfile } from "../redux/user/user.slice";
import WelcomeUser from "../components/WelcomeUser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BankAccount from "../components/BankAccount";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch, navigate]);
  return (
    <div>
      <Header />
      <WelcomeUser />
      <BankAccount />
      <Footer />
    </div>
  );
};

export default UserProfile;
