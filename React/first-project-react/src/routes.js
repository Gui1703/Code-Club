import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Users from "./views/Users";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}
