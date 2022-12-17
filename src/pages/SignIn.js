import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormSignIn from "../components/FormSignIn";
import Loader from "../components/Loader";

const SignIn = () => {
  // Loader animation
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <FormSignIn />
      <Footer />
    </div>
  );
};

export default SignIn;
