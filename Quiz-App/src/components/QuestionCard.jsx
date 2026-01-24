import React from "react";

const QuestionCard = ({ question, options, onSelect }) => {
  return (
    <div className="shadow-xl p-4">
      <h4 className="text-xl font-semibold">{question}</h4>
      <div className="mt-3">
        {options.map((opt, i) => (
          <button
            className=" px-4 py-2 border outline-2  outline-blue-500 border-transparent text-blue-500 font-medium rounded-md shadow-sm w-full mt-2 hover:cursor-pointer hover:bg-blue-300 hover:text-black "
            key={i}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
