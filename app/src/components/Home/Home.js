import React from 'react'
import { Link } from 'react-router'

const Home = () => (
  <div>
    <h1>Homepage</h1>
    <Link to={'about'}>
      <p>Go to about page</p>
    </Link>
  </div>
);

export default Home;
