import React from "react";

import List from "./List";
import data from "./data";

const Birthday = () => {
  const people = data;
  return (
    <main className="container">
      <h2>1. Birthday Project ({people.length} People)</h2>
      <List people={people} />
    </main>
  );
};

export default Birthday;
