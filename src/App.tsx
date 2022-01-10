import React, { Fragment } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';
import Home from './components/Home';
import Instructions from './components/Instructions';
import Admin from './components/Admin';
import Categories from './components/Categories';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Instructions App</h1>
          <hr className="mb-3"></hr>
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/instructions">Instructions</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/by-category">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/instructions/:id" element={<Instruction />} />
              <Route path="/instructions" element={<Instructions />} />
              <Route path="/by-category" element={<CategoryPage />} />
              <Route path="/categories/mexican" element={<Categories />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Instruction() {
  let { id } = useParams();

  return <h2>Instruction ID: {id}</h2>;
}

function CategoryPage() {
  let location = useLocation();

  return (
    <div>
      <h2>Categories</h2>

      <ul>
        <li>
          <Link to={`${location.pathname}/mexican`}>Mexican</Link>
        </li>
        <li>
          <Link to={`${location.pathname}/italian`}>Italian</Link>
        </li>
        <li>
          <Link to={`${location.pathname}/french`}>French</Link>
        </li>
      </ul>
    </div>
  );
}
