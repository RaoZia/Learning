import questions from "../data/questions.json";
import React, { createContext, useReducer } from "react";
const QuizContext = createContext();

const initialState = {
  username: " ",
  index: 0,
  score: 0,
  completed: false,
  questions,
};
console.log(questions);
function reducerFun(state, action) {
  switch (action.type) {
    case "Set_Name":
      return {
        ...state,
        username: action.payload,
      };

    case "Answer":
      return {
        ...state,
        score: action.payload ? state.score + 1 : state.score,
        index: state.index + 1,
      };

    case "Finish":
      return {
        ...state,
        completed: true,
      };

    case "Reset":
      return {
        ...initialState,
        questions: state.questions,
      };
    default:
      return state;
  }
}
const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
export { QuizContext, QuizProvider };
