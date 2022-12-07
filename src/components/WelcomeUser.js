import React from "react";
import { useSelector } from "react-redux";
import ButtonEditName from "./ButtonEditName";

const WelcomeUser = () => {
  const { firstName, lastName } = useSelector((state) => state.auth);
  return (
    <div className="header">
      <h1>
        Welcome back
        <span>
          {firstName} {lastName}
        </span>
      </h1>
      <ButtonEditName />
    </div>
  );
};

export default WelcomeUser;
