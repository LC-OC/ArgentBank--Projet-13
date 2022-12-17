import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userProfile } from "../redux/user/user.slice";
import HeaderUser from "../components/HeaderUser";
import Footer from "../components/Footer";
import BankAccount from "../components/BankAccount";
import FormEditName from "../components/FormEditName";
import Loader from "../components/Loader";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch, navigate]);

  // Loader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <HeaderUser />
      <div className="main-user-profile">
        <FormEditName />
        <BankAccount />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
