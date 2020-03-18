import React from "react";

import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../components/About/About";

const About = () => {
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        color: "white"
      }}
    >
      <Navbar />
      <AboutHero />
    </div>
  );
};

export default About;
