import React from "react";

const Timer = ({ time }) => {
  return (
    <div className="text-center py-2 rounded-md bg-blue-200 font-medium">
      Time Left: {time}s
    </div>
  );
};

export default Timer;
