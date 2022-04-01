import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const Accordian = () => {
  const [questions, setQuestions] = useState(data);
  // Not UseState because local data

  return (
    <div className="container">
      <h4>4. Accordian Project</h4>
      <div>
        <p>Question and Answers About Login</p>
      </div>
      <div>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
};

export default Accordian;
