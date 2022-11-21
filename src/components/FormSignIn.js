import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const FormSignIn = () => {
  return (
    <div className="main">
      <section className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label>Username</label>
            <input type="text" className="username" />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" className="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" className="remember-me" />
            <label>Remember me</label>
          </div>
          <NavLink to="/user" className="link-user">
            <button className="sign-in-button">
              <span>Sign In</span>
            </button>
          </NavLink>
        </form>
      </section>
    </div>
  );
};

export default FormSignIn;
