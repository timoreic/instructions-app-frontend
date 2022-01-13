import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type InstructionType = {
  id: number;
  title: string;
};

export default function Instructions() {
  let [instructions, setInstructions] = useState([{} as InstructionType]);
  let [error, setError] = useState(0);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/v1/instructions')
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
  }, []);

  if (error !== 0) {
    return <h2>Error: {error}</h2>;
  } else if (isLoaded !== true) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <Fragment>
        <h2>Choose Instruction</h2>
        <ul>
          {instructions.map((instruction) => (
            <li key={instruction.id}>
              <Link to={`/instructions/${instruction.id}`}>
                {instruction.title}
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
