import "./App.css";
import Welcome from "./Pages/Welcome";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
// import BookList from './Pages/BookList';
// import Book from './Pages/Book';
// import BookLayout from './Routes/BookLayout';
// import NewBook from './Pages/NewBook';
import NotFound from "./Pages/NotFound";
import BookRoutes from "./Routes/BookRoutes";


function App() {
  const location = useLocation();
  return (
    <>
    {location.state}
      <nav>
        <ul>
          <li>
            {/* activeClassname only actives when the link is active */}
            <NavLink activeClassName="active" to="/" state= "hello">
              Welcome
            </NavLink>
            {/* takes back two pages e-g., if we are on a  page and user goes back instead of taking him to a login page it goes to the homepage */}
            {/* <Link to="/" replace>Welcome</Link> */}

            {/* reloadDocument when clicked on this link reloads the entire page */}
            {/* <Link to="/" reloadDocument>Welcome</Link> */}

            {/* used to pass data along links and doesnt show in URL bar */}
            {/* <Link to="/" state ={}>Welcome</Link> */}
          </li>
          <li>
            {/* we can also add this class as below for the className and is the best approach */}
            <NavLink
              to="/books"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Books
            </NavLink>
            
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/books/*" element={<BookRoutes />} />

        {/* <Route path='/books' element={<BookLayout/>}>
      <Route index element ={<BookList/>}/>
      <Route path="/books/:id" element={<Book />} /> */}
        {/* <Route path="/books/new" element={<NewBook />} /> */}

        {/* </Route> */}
        {/* <Route path="/books" element={<BookList />} />
      <Route path="/books/:id" element={<Book />} />
      {/* if we type in new it will use the route below as of v6 before it would start from the top and will be done in line above  }
      <Route path="/books/new" element={<NewBook />} />
       */}
        <Route state ={"Error"} path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

{/* 
< Redirect to={will redirect to a path we specify here }/>
<Switch> 
anyting in the switch will only render one thing at a time and will not render anything else in the order in which routes are written but if put "exact" in it then it will only render the one which matches the path exactly
</Switch> 

*/}