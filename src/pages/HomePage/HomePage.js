import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import User from "../../components/UserScreen/User";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <User />
      <Footer />
    </div>
  );
};

export default HomePage;
