import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Instruction() {
  const { id } = useParams();
  let [instruction, setInstruction] = useState({
    id: { id },
    title: '',
    time: 0,
  });

  useEffect(() =>
    setInstruction({ id: { id }, title: 'Some Instruction', time: 150 })
  );

  return (
    <Fragment>
      <h2>
        Instruction {id}: {instruction.title}
      </h2>

      <table className="table table-compact table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Title:</strong>
            </td>
            <td>{instruction.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Run time:</strong>
            </td>
            <td>{instruction.time} minutes</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
