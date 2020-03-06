import * as React from "react";
import { useState } from "react";

function CustomTime() {
  const [currentTime, setCurrentTime] = useState("");

  const getDate = () => {
    setCurrentTime(new Date().toTimeString());
  };

  return (
    <div>
      {currentTime}
      <button onClick={getDate}>Get the Time!</button>
    </div>
  );
}

export default CustomTime;
