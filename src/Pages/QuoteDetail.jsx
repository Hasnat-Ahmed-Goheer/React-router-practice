import React from 'react'
import { useParams } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
  const {quoteId } = useParams();
  return (

  
    <>
      <Routes>
        <Route index element={<h2>hello</h2>} />
        <Route path={`/comments`} element={<Comments />} />
      </Routes>
    </>
  );
}

export default QuoteDetail