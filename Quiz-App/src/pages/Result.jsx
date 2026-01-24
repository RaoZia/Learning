import React, { useContext, useEffect } from "react";
import { Link } from "react-router";
import { QuizContext } from "../context/QuizContext";

const Result = () => {
  const { state, dispatch } = useContext(QuizContext);

  const percentage = Math.round((state.score / state.questions.length) * 100);
  useEffect(() => {
    const entry = {
      name: state.username,
      score: state.score,
      percentage,
      date: new Date().toLocaleDateString(),
    };
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const updated = [...stored, entry];
    updated.sort((a, b) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(updated));
  });

  return (
    <div className="container mx-auto text-center mt-5">
      <div className="shadow p-5">
        <h2 className="font-medium ">Quiz Completed!</h2>
        <h4>{state.username} Your score is: </h4>
        <h1>{state.score}</h1>
        <div className="mt-5 ">
          <Link
            to={"/board"}
            className=" mx-1 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-700 text-white"
          >
            View LeaderBoard
          </Link>
          <Link
            to={"/"}
            onClick={() => dispatch({ type: "Reset" })}
            className="mx-1 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-700 text-white"
          >
            Home Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
