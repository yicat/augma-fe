import * as React from "react";
import { Redirect, Route, Switch } from "react-router";

import Upload from "./views/Upload";

export default class Home extends React.Component {
  public render() {
    return (
      <Switch>
        <Redirect path="/" to="data" />
        <Route path="/" component={Upload} />
      </Switch>
    );
  }
}
