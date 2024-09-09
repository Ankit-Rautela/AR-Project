import "../App.css";
import "../index.css";
import { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BelowFooter from "./BelowFooter";
import ProfileBanner from "./ProfileBanner";
import Intro from "./Intro";
import Cursor from "./Cursor";
import RegistrationPopUp from "./RegistrationPopUp";

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
      <Footer />
      <BelowFooter />
      <Cursor />
    </>
  );
};

export default Home;
