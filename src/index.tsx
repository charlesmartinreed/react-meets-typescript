import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./Header";

ReactDOM.render(
  <div>
    <Header msg="Dumb message" />
    <p>Test paragraph!</p>
    <a href="#">Test link!</a>
  </div>,
  document.querySelector("#root")
);
