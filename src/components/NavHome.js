import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const NavHome = () => {
  return (
    <div>
      <NavLink className="main-nav-item" to="/login">
        <FontAwesomeIcon icon={faUserCircle} className="logo-user" />
        Sign In
      </NavLink>
    </div>
  );
};

export default NavHome;
