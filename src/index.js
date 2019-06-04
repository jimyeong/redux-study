import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/style.scss";
import Store from "./store"
import {Provider} from "react-redux";


console.log('@@@@ getStore in index.js', Store.getState());

ReactDOM.render(<Provider store={Store}>
    <App/>
</Provider>, document.getElementById("root"));

