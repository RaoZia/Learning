import React, { useEffect, useState } from "react";

const useTimer = (seconds) => {
  const [time, settime] = useState(seconds);

  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => settime((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);
  return { time, reset: () => settime(seconds) };
};

export default useTimer;
