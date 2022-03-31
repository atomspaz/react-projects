import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      setIndex(0);
    }
    if (number < 0) {
      setIndex(people.length - 1);
    }

    return number;
  };

  const prevPerson = () => {
    let newIndex = index - 1;
    setIndex(newIndex);
    checkNumber(newIndex);
  };
  const nextPerson = () => {
    let newIndex = index + 1;
    setIndex(newIndex);
    checkNumber(newIndex);
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomPerson();
    }
    checkNumber(randomNumber);
    setIndex(randomNumber);
  };

  return (
    <section className="container review-container">
      <div>
        <h2>3. Review Project</h2>
      </div>
      <div className="reviews-project-container">
        <img src={image} alt={name} className="reviews-project-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <p>{name}</p>
      <p>{job}</p>
      <p>{text}</p>
      <div className="review-button-container">
        <button onClick={() => prevPerson(index - 1)}>
          <FaChevronLeft />
        </button>
        <button onClick={() => nextPerson(index + 1)}>
          <FaChevronRight />
        </button>
        <div>
          <button onClick={randomPerson}>surprise me</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
