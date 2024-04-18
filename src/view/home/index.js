import React from "react";
import Header from "../common/Header";
import Landing from "./Landing";
import Footer from "../common/Footer";
import Point from "./Point";
import TopPredictor from "./TopPredictor";
import Steps from "./Steps";
import Match from "./Match";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Point />
      <TopPredictor />
      <Steps />
      <Match />
      <Footer />
    </>
  );
};

export default Home;
