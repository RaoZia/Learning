/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router";
import useTimer from "../hooks/useTimer";

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { index, questions } = state;
  const navigate = useNavigate();
  const { time, reset } = useTimer(15);

  useEffect(() => {
    if (time === 0) {
      dispatch({ type: "Answer", payload: false });
      reset();
    }
  }, [time]);

  if (!questions || questions.length === 0) {
    return <p>Loading...</p>;
  }
  if (index >= questions.length) {
    dispatch({ type: "Finish" });
    navigate("/result");
    return null;
  }

  const current = questions[index];

  const handleSelect = (option) => {
    dispatch({ type: "Answer", payload: option === current.answer });
    reset();
  };
  return (
    <div>
      <div className="container mx-auto mt-4">
        <Timer time={time} />
        <ProgressBar current={index} total={questions.length} />
        <QuestionCard
          question={current.question}
          options={current.options}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default Quiz;
