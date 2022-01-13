import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type InstructionsType = {
  id: number;
  title: string;
};

export default function Category() {
  const { id } = useParams();
  let [instructions, setInstructions] = useState([{} as InstructionsType]);
  let [error, setError] = useState(0);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/instructions/${id}`)
      .then((response) => {
        console.log('status code is: ', response.status);
        if (response.status !== 200) {
          setError(response.status);
        } else {
          setError(0);
        }
        return response.json();
      })
      .then((json) => setInstructions(json.instructions))
      .then(() => setIsLoaded(true));
  }, [id]);

  if (!instructions) {
    instructions = [];
  }

  if (error !== 0) {
    return <h2>Error: {error}</h2>;
  } else if (isLoaded !== true) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <Fragment>
        <h2>Category: </h2>
        <div className="list-group">
          {instructions.map((instruction) => (
            <Link
              className="list-group-item list-group-item-action"
              to={`/instructions/${instruction.id}`}
              key={instruction.id}
            >
              {instruction.title}
            </Link>
          ))}
        </div>
      </Fragment>
    );
  }
}
