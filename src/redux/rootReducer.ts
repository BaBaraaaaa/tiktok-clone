import { combineReducers } from 'redux';
import globalReducer from './slices/global';
import notificationsReducer from './slices/notifications';
import channelsReducer from './slices/channels';
import videosReducer from './slices/videos';
import shortsReducer from './slices/shorts';
import playlistsReducer from './slices/playlists';
import commentsReducer from './slices/comments';
import storage from 'redux-persist/lib/storage';
import { getPersistConfig } from 'redux-deep-persist';

//-------------------------------
export const rootReducer = combineReducers({
  
  global: globalReducer, // Quản lý trạng thái toàn cục (theme, search, user, v.v.)
  videos: videosReducer, // Quản lý danh sách video
  channels: channelsReducer, // Quản lý kênh
  shorts: shortsReducer, // Quản lý video ngắn (YouTube Shorts)
  playlists: playlistsReducer, // Quản lý danh sách phát
  comments: commentsReducer, // Quản lý bình luận
  notifications: notificationsReducer, // Quản lý thông báo
});
// Danh sách whitelist cho global slice
export const whiteListGlobal = [
  'global.theme', // Lưu chủ đề giao diện
  'global.user', // Lưu thông tin người dùng
  'global.history', // Lưu lịch sử xem
  'global.searchHistory', // Lưu lịch sử tìm kiếm
];

// Danh sách whitelist cho videos slice
export const whiteListVideos = [
  'videos.videos', // Lưu danh sách video
  'videos.videoDetails', // Lưu chi tiết video
  'videos.currentVideo', // Lưu video đang xem
];

// Danh sách whitelist cho channels slice
export const whiteListChannels = [
  'channels.channels', // Lưu danh sách kênh
];

// Danh sách whitelist cho shorts slice
export const whiteListShorts = [
  'shorts.shorts', // Lưu danh sách video ngắn
];

// Danh sách whitelist cho playlists slice
export const whiteListPlaylists = [
  'playlists.playlists', // Lưu danh sách phát
];

// Danh sách whitelist cho comments slice
export const whiteListComments = [
  'comments.comments', // Lưu danh sách bình luận
];

// Danh sách whitelist cho notifications slice
export const whiteListNotifications = [
  'notifications.notifications', // Lưu danh sách thông báo
];
// Danh sách whitelist cho auth slice
export const whiteListAuth = [
  'auth.user', // Lưu thông tin người dùng đã đăng nhập
  'auth.isAuthenticated', // Lưu trạng thái xác thực
  'auth.token', // Lưu token xác thực
];
// Kết hợp tất cả whitelist để sử dụng trong cấu hình persist
const combinedWhitelist = [
  ...whiteListGlobal,
  ...whiteListVideos,
  ...whiteListChannels,
  ...whiteListShorts,
  ...whiteListPlaylists,
  ...whiteListComments,
  ...whiteListNotifications,
  ...whiteListAuth,
];
export const rootPersistConfig = getPersistConfig({
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: combinedWhitelist,
  rootReducer,
});
