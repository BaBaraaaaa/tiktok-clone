import { rootPersistConfig, rootReducer } from '../redux/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { useAppDispatch, useAppSelector } from './hook/index';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
const persistor = persistStore(store);

const { dispatch } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor, dispatch, useAppDispatch, useAppSelector };
