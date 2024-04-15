import React from "react";
import "../App.css";
import "../index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Maintenance from "./Maintenance";
import Signup from "./Signup";

const Home = () => {
  return (
    <>
      <Navbar />
      <Maintenance />
      <Signup />
      <Footer />
    </>
  );
};

export default Home;
