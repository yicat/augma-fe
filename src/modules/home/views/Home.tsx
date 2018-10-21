import * as React from "react";
import { IStateHome, lazyInject } from "../states";

class Home extends React.Component {
  @lazyInject("home")
  private readonly stateEx: IStateHome;

  public render() {
    return (
      <div>
        <a onClick={this.handleClick}>前往计数页面</a>
      </div>
    );
  }

  private handleClick = () => {
    this.stateEx.toCount();
  };
}

export default Home;
