import * as React from "react";
import { Route, Switch } from "react-router";

import HomeRoute from "./home/HomeRoute";

class Layout extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/" component={HomeRoute} />
      </Switch>
    );
  }
}

export default Layout;
