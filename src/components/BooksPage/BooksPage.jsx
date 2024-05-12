import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BooksPage.css'; // Import the CSS file

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://softwium.com/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="container"><div className="books-container">
      <h1>Books</h1>
      <ul className="books-list">
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}

export default BooksPage;