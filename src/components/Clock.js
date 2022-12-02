import { useState, useEffect } from "react";

const Clock = () => {
  const [timer, setTimer] = useState(new Date());

  function tick() {
    setTimer(new Date(new Date().toLocaleString("en", { timeZone: "UTC" })));
  }

  useEffect(() => {
    let timerID = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  return <div className="container">{timer.toLocaleTimeString()}</div>;
};

export default Clock;
