import "../App.css";
import "../index.css";
import { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BelowFooter from "./BelowFooter";
import ProfileBanner from "./ProfileBanner";
import Intro from "../pages/Intro";
import Cursor from "./Cursor";
import RegistrationPopUp from "./RegistrationPopUp";
import Certifications from "../pages/Certifications"

const Home = () => {

  const [showSuggestion, setShowSuggestion] = useState(false);

  const clickOnRegister = () => {
    setShowSuggestion(true);
  };

  return (
    <>
      <Navbar onRegisterClick={clickOnRegister} />
      <ProfileBanner />
      {showSuggestion && (<RegistrationPopUp onClose={() => {
        setShowForm(false);
      }} />)}
      <Intro />
      <Certifications />
      <Footer />
      <BelowFooter />
      <Cursor />
    </>
  );
};

export default Home;
