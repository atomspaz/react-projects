import React from "react";

const List = (props) => {
  const { people } = props;
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} className="birthday-project-img " />
            <div>
              <p>{name}</p>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
