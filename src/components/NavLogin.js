import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../redux/auth/auth.slice";
const NavLogin = () => {
  const dispatch = useDispatch();

  // logout
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  // get first name in header when user login
  const { firstName } = useSelector((state) => state.user);
  return (
    <div>
      <NavLink className="main-nav-item" to="/">
        <FontAwesomeIcon icon={faUserCircle} className="logo-user" />
        <span>{firstName}</span>
      </NavLink>
      <NavLink className="main-nav-item" to={"/"} onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOut} className="logo-user" />
        Sign Out
      </NavLink>
    </div>
  );
};

export default NavLogin;
