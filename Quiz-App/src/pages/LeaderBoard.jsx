/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setData(stored);
  }, []);

  const clearBoard = () => {
    localStorage.removeItem("leaderboard");
    setData([]);
  };
  return (
    <div>
      <div className="container mx-auto text-center mt-10 py-5 shadow-2xl">
        <h3 className="text-2xl font-semibold mb-5">Leader Board</h3>
        {data.length === 0 ? (
          <p> No score yet</p>
        ) : (
          <>
            <table className="">
              <thead className="">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Percentage</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td>{val.score}</td>
                    <td>{val.percentage}%</td>
                    <td>{val.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={clearBoard}
              className="px-4 py-2 border border-transparent my-2 rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 hover:cursor-pointer"
            >
              Clear Leaderboard
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
