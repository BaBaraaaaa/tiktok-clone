import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import RootRouter from './routes/rootRouter';
import GlobalStyles from './components/GlobalStyles';
import { CssBaseline } from '@mui/material';
import { useAppDispatch, useAppSelector } from './redux/hook';
import type { RootState } from './redux/store';

function App() {
  const dispatch = useAppDispatch();
  const { videos } = useAppSelector((state: RootState) => state.videos);
  console.log(useAppSelector((state: RootState) => state.videos));
  console.log(videos);
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
