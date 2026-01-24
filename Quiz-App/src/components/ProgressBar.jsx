import React from "react";

const ProgressBar = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="w-full bg-gray-300 rounded-2xl">
      <div
        className="text-center text-white font-semibold my-2  bg-blue-500 rounded-2xl"
        style={{ width: `${progress}%` }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default ProgressBar;
