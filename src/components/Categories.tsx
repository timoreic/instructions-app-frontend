import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type CategoriesType = {
  id: number;
  category_name: string;
};

export default function Categories() {
  let [categories, setCategories] = useState([{} as CategoriesType]);
  let [error, setError] = useState(0);
  let [isLoaded, setIsLoaded] = useState(false);

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
              <Link to={`/category/${m.id}`}>{m.category_name}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
