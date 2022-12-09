import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import argentBankLogo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../redux/auth/auth.slice";

const Header = () => {
  const dispatch = useDispatch();
  // logout
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  // get first name in header when user login
  const { firstName } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);
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
        {isLoggedIn ? (
          <>
            <NavLink className="main-nav-item">
              <FontAwesomeIcon
                icon={faUserCircle}
                to={"/profile"}
                className="logo-user"
              />
              <span>{firstName}</span>
            </NavLink>
            <NavLink className="main-nav-item" to={"/"} onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOut} className="logo-user" />
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="main-nav-item" to="/login">
              <FontAwesomeIcon icon={faUserCircle} className="logo-user" />
              Sign In
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
