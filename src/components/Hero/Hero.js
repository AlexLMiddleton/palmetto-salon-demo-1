import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-logo-box">
        <h1 className="hero-title">Palmetto Salon</h1>
        <h2 className="hero-subtitle">Charleston, SC</h2>
      </div>
      <div className="hero-appointment">
        <h3>MAKE AN APPOINTMENT</h3>
        <Button
          style={{
            backgroundColor: "darkblue",
            borderRadius: "10px",
            padding: "10px 75px 10px 75px",
            fontWeight: 700
          }}
        >
          <Link to="/appointments">BOOK NOW</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
