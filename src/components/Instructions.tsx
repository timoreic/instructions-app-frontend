import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

type InstructionsProps = {};

interface InstructionsState {
  instructions: { id: number; title: string }[];
}

export default class Instructions extends Component<
  InstructionsProps,
  InstructionsState
> {
  constructor(props: InstructionsProps) {
    super(props);
    this.state = { instructions: [] };
  }

  componentDidMount() {
    this.setState({
      instructions: [
        { id: 1, title: 'Chilli Sin Carne' },
        { id: 2, title: 'Broccolli Pasta' },
        { id: 3, title: 'French Lentil Soup' },
      ],
    });
  }

  render() {
    return (
      <Fragment>
        <h2>Choose Instruction</h2>

        <ul>
          {this.state.instructions.map((instruction) => (
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
