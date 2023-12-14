import React,{Suspense} from 'react'
import { Routes,Route } from 'react-router-dom'
// import AllQuotes from '../Pages/AllQuotes'
// import QuoteDetail from '../Pages/QuoteDetail'
// import NewQuote from '../Pages/NewQuote'
import LoadingSpinner from "../components/UI/LoadingSpinner";



const AppRouter = () => {
  const AllQuotes = React.lazy(() => import('../Pages/AllQuotes'));
  const QuoteDetail = React.lazy(() => import('../Pages/QuoteDetail'));
  const NewQuote = React.lazy(() => import('../Pages/NewQuote')); 

  // Lazy loading will work on the routes that are not loaded initially and are loaded on demand. 
  // It helps in loading the routes faster and also helps in loading  the route that is after the /* route. 
  // so this means that it can be used in the App component and it will work fine.

  // in order to use firebase first we have to set ExecutionPolicy to Remote Signed (consult google for this)
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>
        <Route index element={<h2>Home Page</h2>} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quotes" element={<NewQuote />} />
        <Route path="*" element={<h2>Error</h2>} />
      </Routes>

    </Suspense>
  );
}

export default AppRouter