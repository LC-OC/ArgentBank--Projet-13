import React from "react";
import { useSelector } from "react-redux";
import EditName from "./EditName";

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
      <EditName />
    </div>
  );
};

export default WelcomeUser;
