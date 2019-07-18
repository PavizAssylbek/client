import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./containers/App";
import changeText from "./containers/changeText";

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/changeText" exact component={changeText} />
        <Route path="/" exact component={App} />
      </BrowserRouter>
    );
  }
}