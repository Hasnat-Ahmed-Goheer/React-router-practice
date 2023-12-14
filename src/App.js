import {Routes,Route} from 'react-router-dom'
import AppRouter from './Routes/AppRouter';
import AllQuotes from './Pages/AllQuotes';
import QuoteDetail from './Pages/QuoteDetail';
import NewQuote from './Pages/NewQuote';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AppRouter/>} />
        
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
        <Route path="/new-quotes" element={<NewQuote />} />
        <Route path="*" element={ <h2>Error</h2>} />
        </Routes>

    </>
  );
}

export default App;
