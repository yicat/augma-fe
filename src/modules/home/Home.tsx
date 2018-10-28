import * as React from "react";
import { Redirect, Route, Switch } from "react-router";

import Upload from "./views/Data";

export default class Home extends React.Component {
  public render() {
    return (
      <Switch>
        <Redirect exact={true} path="/" to="/data" />
        <Route exact={true} path="/data" component={Upload} />
      </Switch>
    );
  }
}
