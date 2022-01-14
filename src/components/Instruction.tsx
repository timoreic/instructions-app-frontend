import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type InstructionType = {
  id: number;
  title: string;
  description: string;
  rating: number;
  categories: string[];
  steps: string[];
};

export default function Instruction() {
  const { id } = useParams();
  let [instruction, setInstruction] = useState({} as InstructionType);
  let [error, setError] = useState(0);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/instruction/${id}`)
      .then((response) => {
        console.log('status code is: ', response.status);
        if (response.status !== 200) {
          setError(response.status);
        } else {
          setError(0);
        }
        return response.json();
      })
      .then((json) => setInstruction(json.instruction))
      .then(() => setIsLoaded(true));
  }, [id]);

  if (instruction.categories) {
    instruction.categories = Object.values(instruction.categories);
  } else {
    instruction.categories = [];
  }

  if (error !== 0) {
    return <h2>Error: {error}</h2>;
  } else if (isLoaded !== true) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <Fragment>
        <h2>{instruction.title}</h2>

        <div className="float-start">
          <small>Rating: {instruction.rating}</small>
        </div>

        <div className="float-end">
          <small>
            {instruction.categories.map((m, index) => (
              <span className="badge bg-secondary me-1" key={index}>
                {m}
              </span>
            ))}
          </small>
        </div>
        <div className="clearfix"></div>

        <hr />

        <table className="table table-compact table-striped">
          <thead></thead>

          <tbody>
            <tr>
              <td>
                <strong>Description:</strong>
              </td>
              <td>{instruction.description}</td>
            </tr>

            <tr>
              <td>
                <strong>Steps:</strong>
              </td>
              <td>
                <ol>
                  {instruction.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}
