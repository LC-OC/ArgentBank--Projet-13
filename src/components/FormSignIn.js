import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../redux/services/auth.slice";
import { userProfile } from "../redux/services/user.slice";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formLogin;
  const { user, isError, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      console.log(":(");
    } else if (isSuccess) {
      console.log(":)");
      navigate("/profile");
    }
  }, [user, isError, isSuccess, navigate, dispatch]);

  const handleOnChangeBis = (e) => {
    setFormLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmitBis = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    if (!userData.email || !userData.password) {
      console.log("mauvais identifiant");
    } else {
      dispatch(loginUser(userData));
      dispatch(userProfile(userData));
    }
  };

  return (
    <div className="main">
      <section className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleOnSubmitBis}>
          <div className="input-wrapper">
            <label>Username</label>
            <input
              type="email"
              name="email"
              value={email}
              className="username"
              onChange={handleOnChangeBis}
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="password"
              onChange={handleOnChangeBis}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" className="remember-me" />
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
