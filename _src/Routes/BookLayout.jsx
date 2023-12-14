import React from 'react'
import { Link,Outlet, useSearchParams } from 'react-router-dom';

const BookLayout = () => {
    // const [text,setText] = React.useState('nw');
    const [searchParams,setSearchParams] = useSearchParams({text:'nw'});
    const text = searchParams.get('text');
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/3">Book 3</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <br />
      <Link to={`/books/${text}`}>New Book {text}</Link>
      {/* <Link to={`/books/${text}`}>New Book {text}</Link> */}
      <Outlet context={{hello:'Hello World'}}/>

      <input type="text" value={text} onChange={e=> setSearchParams(e.target.value)} />
      {/* <input type="text" value={text} onChange={e=> setText(e.target.value)} /> */}
    </>
  );

}

export default BookLayout