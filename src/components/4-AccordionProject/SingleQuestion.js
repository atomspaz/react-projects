import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = (props) => {
  const { title, info } = props;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <p>{title}</p>
      {showInfo && <p>{info}</p>}
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </div>
  );
};

export default SingleQuestion;
