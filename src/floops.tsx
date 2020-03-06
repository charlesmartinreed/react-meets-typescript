import * as React from "react";
import { render } from "react-dom";

type FruitLoopsProps = {
  fruits: { name: string; color: string }[];
};

function FruitLoops(props: FruitLoopsProps) {
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
}

export { FruitLoops };
