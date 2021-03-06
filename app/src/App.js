import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

import "./Styles/reset.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/chat" exact component={Chat} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
