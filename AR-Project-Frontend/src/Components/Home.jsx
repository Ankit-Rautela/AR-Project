import React, { useState } from "react";
import "../App.css";
import "../index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Signup from "./Signup";
import BelowFooter from "./BelowFooter";
import ProfileBanner from "./ProfileBanner";
import Intro from "./Intro";
import Cursor from "./Cursor";

import Login from "./Login";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const clickOnRegister = () => {
    setShowForm(true);
  };

  return (
    <>
      <Navbar onRegisterClick={clickOnRegister} />
      <ProfileBanner />
      {showForm && (
        <Signup
          onClose={() => {
            setShowForm(false);
          }}
        />
      )}
      {showForm && (
        <Login
          onClose={() => {
            setShowForm(false);
          }}
        />
      )}
      <Intro />
      <Footer />
      <BelowFooter />
      <Cursor />
    </>
  );
};

export default Home;
