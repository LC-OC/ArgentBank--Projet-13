import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../redux/services/auth.slice";

const WelcomeUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { firstName, lastName, isError } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      console.log("oh no :(");
    } else {
      dispatch(userProfile());
      console.log("oh yeah ;)");
    }
  }, [isError, dispatch, navigate]);
  return (
    <div>
      <h1>
        Welcome back, {firstName} {lastName}
      </h1>
    </div>
  );
};

export default WelcomeUser;
