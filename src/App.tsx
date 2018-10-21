import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./modules/Layout";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
