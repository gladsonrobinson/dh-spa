import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "../../pages";

const AppCtnr = () => (
  <Router>
    <div className="main-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default AppCtnr;
