import React, { useState } from "react";
import "../App.css";
import "../index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Signup from "./Signup";
import BelowFooter from "./BelowFooter";
import ProfileBanner from "./ProfileBanner";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const clickOnRegister = () => {
    setShowForm(true);
    // console.log(showForm);
  };

  return (
    <>
      <Navbar onRegisterClick={clickOnRegister} />
      <ProfileBanner />
      {showForm && (
        <Signup
          onClose={() => {
            setShowForm(false);
            // console.log(showForm);
          }}
        />
      )}
      <Footer />
      <BelowFooter />
    </>
  );
};

export default Home;
