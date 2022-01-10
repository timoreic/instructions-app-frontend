import React, { Component } from 'react';

interface CategoriesProps {
  title: string;
}

type CategoriesState = {};

export default class Categories extends Component<
  CategoriesProps,
  CategoriesState
> {
  render() {
    return <h2>Category: {this.props.title}</h2>;
  }
}
