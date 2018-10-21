import * as React from "react";
import { Route, Switch } from "react-router";

import Count from "./views/Count";
import Home from "./views/Home";

class HomeRoute extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/count" component={Count} />
      </Switch>
    );
  }
}

export default HomeRoute;
