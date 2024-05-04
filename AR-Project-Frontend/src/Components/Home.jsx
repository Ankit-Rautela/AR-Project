import React, {useState} from "react";
import "../App.css";
import "../index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Maintenance from "./Maintenance";
import Signup from "./Signup";
import HomePage from "./HomePage";
import BelowFooter from "./BelowFooter";
import SignupPro from "./SignupPro";
import ProfileBanner from "./ProfileBanner";


const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const clickOnRegister = () => {
    setShowForm(true);
    console.log("showForm:", showForm);
  };

  return (
    <>
      <Navbar onRegisterClick={clickOnRegister}/>
      <ProfileBanner />
      {/* <Maintenance /> */}
      {/* <HomePage /> */}
      {/* <Signup showForm={showForm}/> */}
      <SignupPro showForm={showForm}/>
      <Footer />
      <BelowFooter />
    </>
  );
};

export default Home;
