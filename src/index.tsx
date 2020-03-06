import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./Header";
import CustomTime from "./CustomTime";
import { FruitLoops } from "./floops";

const fruits = [
  { name: "apple", color: "red" },
  { name: "orange", color: "orange" },
  { name: "banana", color: "yellow" },
  { name: "kiwi", color: "green" },
  { name: "pineapple", color: " brown" }
];

ReactDOM.render(
  <div>
    <Header msg="Dumb message" />
    <CustomTime />
    <FruitLoops fruits={fruits} />
    <p>Test paragraph!</p>
    <a href="#">Test link!</a>
  </div>,
  document.querySelector("#root")
);
