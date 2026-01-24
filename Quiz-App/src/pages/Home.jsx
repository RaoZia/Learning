import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router";

const Home = () => {
  const [name, setName] = useState("");
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();
  const StartQuiz = () => {
    if (!name.trim()) return alert("Please Enter Your Name First.");
    dispatch({ type: "Set_Name", payload: name });
    navigate("/quiz");
  };
  return (
    <div>
      <div className="container w-1/2 text-center  mt-5 mx-auto shadow-xl p-4 rounded">
        <h1 className="text-xl font-bold my-2">React Quiz Challange</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full p-1 bg-gray-200 my-2 rounded border border-transparent outline-none"
          onChange={(event) => setName(event.target.value)}
        />
        <button
          onClick={StartQuiz}
          className=" px-4 py-2 border border-transparent my-2 rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 hover:cursor-pointer"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
