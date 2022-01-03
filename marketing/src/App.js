import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default (props) => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route path="/">
              <Landing {...props} />
            </Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
