import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeFeatures from "../components/HomeFeatures";

const Home = () => {
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
