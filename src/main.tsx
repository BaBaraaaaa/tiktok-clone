import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { persistor, store } from './redux/store.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAppTheme } from './Theme/theme.ts';
const Root = () => {
  const theme = useAppTheme(); // <- Tạo theme mỗi lần Redux thay đổi

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>,
);
