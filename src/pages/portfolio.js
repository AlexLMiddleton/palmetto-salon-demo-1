import React from "react";

import Navbar from "../components/Navbar/Navbar";
import PortfolioGrid from "../components/Portfolio/Portfolio";

const Portfolio = () => {
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "black",
        width: "100%",
        height: "100vh"
      }}
    >
      <Navbar />
      <PortfolioGrid />
    </div>
  );
};

export default Portfolio;
