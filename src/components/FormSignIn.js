import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../redux/auth/auth.slice";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const { isError, isSuccess } = useSelector((state) => state.auth);
  const { email, password } = formLogin;

  useEffect(() => {
    if (isError) {
      console.log("error");
    }
    if (isSuccess) {
      navigate("/profile");
    }
  }, [isError, isSuccess, navigate, dispatch]);

  const handleOnChange = (e) => {
    setFormLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    if (
      userData.email === "" ||
      userData.password === "" ||
      !userData.email ||
      !userData.password
    ) {
      setErrorMessage("Wrong email or password. Try again.");
    } else {
      dispatch(loginUser(userData));
      setErrorMessage(null);
    }
  };
  return (
    <div className="main">
      <section className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="input-wrapper">
            <label>Username</label>
            <input
              type="email"
              name="email"
              value={email}
              className="username"
              onChange={handleOnChange}
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="password"
              onChange={handleOnChange}
            />
            {errorMessage && <p>{errorMessage}</p>}
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              className="remember-me"
              //onChange={rememberMeCheck}
            />
            <label>Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            <span>Sign In</span>
          </button>
        </form>
      </section>
    </div>
  );
}
