import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailsPage.css'; // Import the CSS file

function BookDetailsPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://softwium.com/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-container">
      <div className="text"><h1>{book.title}</h1></div>
      
      <p>ISBN: {book.isbn}</p>
      <p>Page Count: {book.pageCount}</p>
      <p>Authors: {book.authors.join(', ')}</p>
    </div>
  );
}

export default BookDetailsPage;