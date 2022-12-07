import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import argentBankLogo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";

const HeaderUser = () => {
  const { firstName } = useSelector((state) => state.auth);
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
        <NavLink className="main-nav-item" to="/">
          <FontAwesomeIcon icon={faUserCircle} className="logo-user" />
          {firstName}
        </NavLink>
        <NavLink className="main-nav-item" to="/">
          <FontAwesomeIcon icon={faSignOut} className="logo-user" />
          Sign Out
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderUser;
