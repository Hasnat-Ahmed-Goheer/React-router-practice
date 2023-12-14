import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const params = useParams();
  const { hello } = useOutletContext();
  return <h2>Book {params.id} {hello}</h2>;
};

export default Book;
