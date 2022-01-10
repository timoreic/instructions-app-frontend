import React from 'react';

interface CategoriesProps {
  title: string;
}

export default function Categories(props: CategoriesProps) {
  return <h2>Category: {props.title}</h2>;
}
