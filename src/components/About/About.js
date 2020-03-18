import React from "react";
import { Link } from "react-router-dom";

import Headshot from "./eleanor-N57BXCt7LDU-unsplash.jpg";

import "./About.css";

const AboutHero = () => {
  return (
    <div className="about-hero-container">
      <div className="about-image">
        <img src={Headshot} alt="Headshot" />
      </div>
      <div className="about-info-container">
        <h1>About Us</h1>
        <p>
          Palmetto Salon provides glamorous haircuts that'll leave you feeling
          confident and beautiful. Need a trim? We can do that. Looking for a
          new 'do, but not sure what will look best? Schedule a consultation
          with one of our master stylists.
        </p>
        <p>We're here to help you look and feel your best.</p>
        <div className="appointment-box">
          <Link to="/appointments">Book Your Appointment Today</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
