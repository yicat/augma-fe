import * as React from "react";
import { Route, Switch } from "react-router";
import { Router } from "react-router-dom";

import backimage from "src/assets/background.jpg";
import { lazyInject, RouterService } from "./dependence";
import HomeRoute from "./modules/home/Home";

export default class App extends React.Component {
  @lazyInject(RouterService)
  private router: RouterService;

  public render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `url(${backimage})`
        }}
      >
        <Router history={this.router.history}>
          <Switch>
            <Route path="/" component={HomeRoute} />
          </Switch>
        </Router>
      </div>
    );
  }
}
