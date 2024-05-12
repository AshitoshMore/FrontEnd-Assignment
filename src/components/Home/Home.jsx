// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Library</h1>
      <p>Explore our collection of books!</p>
      <Link to="/books">
        <button>Show Books</button>
      </Link>
    </div>
  );
}

export default HomePage;
