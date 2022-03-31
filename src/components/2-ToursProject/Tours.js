import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <section className="container">
        <div>
          <h2>Tours Project</h2>
        </div>
        <div>
          <Loading />
        </div>
      </section>
    );
  }
  // Watch out length
  if (tours.length === 0) {
    return (
      <section className="container">
        <div>
          <h2>Tours Project</h2>
          <div>
            <p>No more Tours left!!</p>
            <button onClick={() => fetchTours()}>Refresh Tours</button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="container">
      <div>
        <h2>2. Tours Project</h2>
      </div>
      <div>
        {tours.map((tour) => {
          const { id, image, info, name, price } = tour;
          return (
            <article key={id}>
              <img src={image} alt={name} className="tours-project-img" />
              <div>
                <p>{name}</p>
                <p>${price}</p>
                <p>
                  {readMore ? info : `${info.substring(0, 200)}...`}
                  <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "read less" : "read more"}
                  </button>
                </p>
              </div>
              <button onClick={() => removeTour(id)}>Remove Tour</button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
