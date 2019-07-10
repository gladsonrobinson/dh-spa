import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppCtnr from "./containers/app";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppCtnr />
        </div>
      </Provider>
    );
  }
}
