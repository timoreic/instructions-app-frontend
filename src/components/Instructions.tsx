import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Instructions() {
  let [instructions, setInstructions] = useState([{ id: 0, title: '' }]);

  useEffect(
    () =>
      setInstructions([
        { id: 1, title: 'Chilli Sin Carne' },
        { id: 2, title: 'Broccolli Pasta' },
        { id: 3, title: 'French Lentil Soup' },
      ]),
    [instructions]
  );

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
