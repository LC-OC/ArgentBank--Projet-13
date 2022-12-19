import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <Header />
      <div className="main_error">
        <h1>Are you lost ? This page doesn't exist !</h1>
        <p>
          Visit our{" "}
          <Link className="link-error" to="/">
            home page
          </Link>{" "}
          or{" "}
          <Link className="link-error" to="/login">
            sign in
          </Link>{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
