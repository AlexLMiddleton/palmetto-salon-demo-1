import React from "react";

import Item1 from "./images/oladimeji-odunsi-n5aE6hOY6do-unsplash.jpg";
import Item2 from "./images/alina-kovalchuk-BdrUHhkPA0M-unsplash.jpg";
import Item3 from "./images/averie-woodard-4nulm-JUYFo-unsplash (1).jpg";
import Item4 from "./images/averie-woodard-F9OmRNNlnYA-unsplash (1).jpg";
import Item5 from "./images/elice-moore-E--AUpYXbjM-unsplash (1).jpg";
import Item6 from "./images/george-bohunicky-qJKT2rMU0VU-unsplash.jpg";
import Item7 from "./images/tiko-giorgadze-AP-TfM3KT4g-unsplash (1).jpg";
import Item8 from "./images/tim-mossholder-ArQIWcmOlA8-unsplash.jpg";

import "./Portfolio.css";

const PortfolioGrid = () => {
  return (
    <div className="portfolio-grid-container">
      <div className="grid-item">
        <img src={Item1} alt="ItemOne" />
      </div>
      <div className="grid-item">
        <img src={Item2} alt="ItemOne" />
      </div>
      <div className="grid-item">
        <img src={Item3} alt="ItemOne" />
      </div>
      <div className="grid-item">
        <img src={Item4} alt="ItemOne" />
      </div>
      <div className="grid-item center-grid"></div>
      <div className="grid-item">
        <img src={Item5} alt="ItemOne" />
      </div>
      <div className="grid-item">
        <img src={Item6} alt="ItemOne" />
      </div>
      <div className="grid-item">
        <img src={Item7} alt="ItemOne" />
      </div>
      <div className="grid-item">
        <img src={Item8} alt="ItemOne" />
      </div>
    </div>
  );
};

export default PortfolioGrid;
