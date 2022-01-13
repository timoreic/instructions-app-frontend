import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

type CategoryClickHandler = (
  categoryName: string
) => (e: React.MouseEvent) => void;

type CategoriesType = {
  id: number;
  category_name: string;
};

export default function Categories(props: CategoriesProps) {
  let [categories, setCategories] = useState([{} as CategoriesType]);
  let [error, setError] = useState(0);
  let [isLoaded, setIsLoaded] = useState(false);

  const categoryClickHandler: CategoryClickHandler = (categoryName) => (e) => {
    props.onSelectCategory(categoryName);
  };

  useEffect(() => {
    fetch('http://localhost:4000/v1/categories')
      .then((response) => {
        console.log('status code is: ', response.status);
        if (response.status !== 200) {
          setError(response.status);
        } else {
          setError(0);
        }
        return response.json();
      })
      .then((json) => setCategories(json.categories))
      .then(() => setIsLoaded(true));
  }, []);

  if (error !== 0) {
    return <h2>Error: {error}</h2>;
  } else if (isLoaded !== true) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <Fragment>
        <h2>Categories</h2>
        <ul>
          {categories.map((m) => (
            <li key={m.id}>
              <Link
                to={`/category/${m.id}`}
                onClick={categoryClickHandler(m.category_name)}
              >
                {m.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
