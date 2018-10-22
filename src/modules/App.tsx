import * as React from "react";
import { Route, Switch } from "react-router";
import { Router } from "react-router-dom";

import * as cls from "./App.module.less";
import { lazyInject, RouterService } from "./dependence";
import HomeRoute from "./home/Home";

export default class App extends React.Component {
  @lazyInject(RouterService)
  private router: RouterService;

  public render() {
    return (
      <Router history={this.router.history}>
        <div className={cls.container}>
          <Switch>
            <Route path="/" component={HomeRoute} />
          </Switch>
        </div>
      </Router>
    );
  }
}
