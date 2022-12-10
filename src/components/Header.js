import React from "react";
import { NavLink } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Logo ArgentBank"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <NavLink className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faUserCircle} className="logo-user" />
          Sign In
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
