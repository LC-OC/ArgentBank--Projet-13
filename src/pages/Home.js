import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeFeatures from "../components/HomeFeatures";
import Loader from "../components/Loader";

const Home = () => {
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
      <HomeContent />
      <HomeFeatures />
      <Footer />
    </div>
  );
};

export default Home;
