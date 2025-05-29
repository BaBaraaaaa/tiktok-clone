import { combineReducers } from 'redux';
import globalReducer from './slices/global';
import videoReducer from './slices/videos';
import storage from 'redux-persist/lib/storage';
import { getPersistConfig } from 'redux-deep-persist';

//-------------------------------
export const rootReducer = combineReducers({
  global: globalReducer,
  videos: videoReducer,
});
export const whileListGlobal = ['global.theme', 'global.isAuthenticated', 'global.user', 'global.history'];

export const whileListVideos = ['videos.currentVideo'];
export const rootPersistConfig = getPersistConfig({
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [...whileListGlobal, ...whileListVideos],
  rootReducer,
});
