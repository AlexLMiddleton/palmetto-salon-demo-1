import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/main.js";
import About from "./pages/about.js";
import Portfolio from "./pages/portfolio.js";
import Appointments from "./pages/appointments.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/appointments" component={Appointments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
