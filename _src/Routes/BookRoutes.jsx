import React from 'react'
import BookList from '../Pages/BookList';
import Book from '../Pages/Book';
import BookLayout from './BookLayout';
import NewBook from "../Pages/NewBook";
import { Routes,Route } from 'react-router-dom';

const BookRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}

export default BookRoutes