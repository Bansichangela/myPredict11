import React from "react";
import Header from "../common/Header";
import Landing from "./Landing";
import Footer from "../common/Footer";
import Point from "./Point";
import TopPredictor from "./TopPredictor";
import Steps from "./Steps";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Point />
      <TopPredictor />
      <Steps />
      <Footer />
    </>
  );
};

export default Home;
