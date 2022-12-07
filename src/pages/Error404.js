import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error404 = () => {
  return (
    <div>
      <Header />
      <div className="main_error">
        <h1>Oups cette page n'existe pas !</h1>
        <img
          src="https://media3.giphy.com/media/WRuBiZKB6xgsS9DrFA/200w.gif?cid=6c09b952gdxquzrlosnks3zm94k5xo7imypaksfk6057rap4&rid=200w.gif&ct=g"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
