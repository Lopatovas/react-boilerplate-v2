import * as React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Landing } from "./containers/Landing";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  </BrowserRouter>
);
