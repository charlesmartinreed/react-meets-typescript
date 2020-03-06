import * as React from "react";
import { useState } from "react";

const CustomTime = () => {
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
};

CustomTime.displayName = "CustomDate";

export default CustomTime;
