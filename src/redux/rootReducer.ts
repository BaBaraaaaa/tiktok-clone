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
export const whiteListGlobal  = ['global.theme', 'global.isAuthenticated', 'global.user', 'global.history', ' global.videos'];

export const whileListVideos = ['videos.currentVideo'];
export const rootPersistConfig = getPersistConfig({
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [...whiteListGlobal , ...whileListVideos],
  rootReducer,
});
