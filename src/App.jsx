// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the addition of Routes
import BooksPage from './components/BooksPage/BooksPage';
import BookDetailsPage from './components/BookDetailsPage/BookDetailsPage';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes around your Route components */}
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
