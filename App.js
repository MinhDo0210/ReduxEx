import React, { Component } from "react";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./reducers";

import Home from "./screens/Home";

let store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
