import * as React from "react";
import { render } from "react-dom";

type FruitLoopsProps = {
  fruits: { name: string; color: string }[];
};

const FruitLoops = (props: FruitLoopsProps) => {
  return (
    <ul>
      {Object.values(props.fruits).map(({ name, color }, idx) => {
        return (
          <li style={{ color: color }} key={idx}>
            {name}
          </li>
        );
      })}
    </ul>
  );
};

FruitLoops.displayName = "FLoops";
export { FruitLoops };
