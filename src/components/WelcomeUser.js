import React from "react";
import { useSelector } from "react-redux";
import FormEditName from "./FormEditName";

const WelcomeUser = () => {
  const { firstName, lastName } = useSelector((state) => state.user);
  return (
    <div className="header">
      <h1>
        Welcome back
        <span>
          {firstName} {lastName}
        </span>
      </h1>
      <FormEditName />
    </div>
  );
};

export default WelcomeUser;
