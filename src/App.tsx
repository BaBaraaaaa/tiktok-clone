import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import RootRouter from './routes/rootRouter';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
      <BrowserRouter>
        <GlobalStyles>
          <RootRouter />
        </GlobalStyles>
      </BrowserRouter>
  );
}

export default App;
