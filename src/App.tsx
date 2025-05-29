import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import RootRouter from './routes/rootRouter';
import GlobalStyles from './components/GlobalStyles';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles>
        <CssBaseline />
        <RootRouter />
      </GlobalStyles>
    </BrowserRouter>
  );
}

export default App;
