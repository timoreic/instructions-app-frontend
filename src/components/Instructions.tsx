import React, { Component, Fragment } from 'react';

type InstructionsProps = {};

type instruction = { id: number; title: string };

interface InstructionsState {
  instructions: instruction[];
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
        { id: 1, title: 'Bean Stir' },
        { id: 2, title: 'Pasta Pesto' },
        { id: 3, title: 'Lentil Soup' },
      ],
    });
  }

  render() {
    return (
      <Fragment>
        <h2>Choose Instruction</h2>

        <ul>
          {this.state.instructions.map((instruction) => (
            <li key={instruction.id}>{instruction.title}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
