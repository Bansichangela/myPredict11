import React from "react";
import Header from "../common/Header";
import Landing from "./Landing";
import Footer from "../common/Footer";
import TopPredictor from "./TopPredictor";
import Steps from "./Steps";
import Match from "./Match";
import Quality from "./Quality";
import Point from "./Point";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Point />
      <TopPredictor />
      <Steps />
      <Match />
      <Quality />
      <Footer />
    </>
  );
};

export default Home;
