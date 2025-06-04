// Hàm path để nối root và sublink
function path(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

// Định nghĩa các root cơ bản
const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '';
const ROOTS_CHANNEL = '/channel';
const ROOTS_VIDEO = '/video';
const ROOTS_PLAYLIST = '/playlist';

// Định nghĩa các path cho xác thực (Authentication)
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify'),
  forgotPassword: path(ROOTS_AUTH, '/forgot-password'),
};

// Định nghĩa các path cho các trang tĩnh (Static Pages)
export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  page404: '/404',
  page500: '/500',
  components: '/components',
  maintenance: '/maintenance',
};

// Định nghĩa các path cho dashboard (giao diện chính, tương tự YouTube)
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    home: path(ROOTS_DASHBOARD, '/'),
    watch: (watchingId: string) => path(ROOTS_DASHBOARD, `/watch/${watchingId}`), // Dynamic path cho video
    history: path(ROOTS_DASHBOARD, '/history'),
    shorts: path(ROOTS_DASHBOARD, '/shorts'),
    trending: path(ROOTS_DASHBOARD, '/trending'),
    subscriptions: path(ROOTS_DASHBOARD, '/subscriptions'),
  },
  feed: {
    root: path(ROOTS_DASHBOARD, '/feed'),
    subscriptions: path(ROOTS_DASHBOARD, '/feed/subscriptions'),
    trending: path(ROOTS_DASHBOARD, '/feed/trending'),
    history: path(ROOTS_DASHBOARD, '/feed/history'),
    likedVideos: path(ROOTS_DASHBOARD, '/feed/liked-videos'),
  },
  search: {
    root: path(ROOTS_DASHBOARD, '/search'),
    results: (query: string) => path(ROOTS_DASHBOARD, `/search?query=${encodeURIComponent(query)}`), // Dynamic path cho tìm kiếm
  },
};

// Định nghĩa các path cho kênh (Channel)
export const PATH_CHANNEL = {
  root: ROOTS_CHANNEL,
  profile: (channelId: string) => path(ROOTS_CHANNEL, `/${channelId}`), // Trang kênh của người dùng
  videos: (channelId: string) => path(ROOTS_CHANNEL, `/${channelId}/videos`), // Danh sách video của kênh
  playlists: (channelId: string) => path(ROOTS_CHANNEL, `/${channelId}/playlists`), // Danh sách phát của kênh
  about: (channelId: string) => path(ROOTS_CHANNEL, `/${channelId}/about`), // Trang giới thiệu kênh
};

// Định nghĩa các path cho video
export const PATH_VIDEO = {
  root: ROOTS_VIDEO,
  watch: (videoId: string) => path(ROOTS_VIDEO, `/watch/${videoId}`), // Xem video
  edit: (videoId: string) => path(ROOTS_VIDEO, `/edit/${videoId}`), // Chỉnh sửa video
  upload: path(ROOTS_VIDEO, '/upload'), // Tải video lên
};

// Định nghĩa các path cho danh sách phát (Playlist)
export const PATH_PLAYLIST = {
  root: ROOTS_PLAYLIST,
  view: (playlistId: string) => path(ROOTS_PLAYLIST, `/${playlistId}`), // Xem danh sách phát
  edit: (playlistId: string) => path(ROOTS_PLAYLIST, `/edit/${playlistId}`), // Chỉnh sửa danh sách phát
  create: path(ROOTS_PLAYLIST, '/create'), // Tạo danh sách phát
};

// Định nghĩa các path cho tài khoản người dùng
export const PATH_ACCOUNT = {
  root: '/account',
  profile: path('/account', '/profile'), // Trang hồ sơ cá nhân
  settings: path('/account', '/settings'), // Trang cài đặt
  subscriptions: path('/account', '/subscriptions'), // Quản lý đăng ký
  history: path('/account', '/history'), // Lịch sử xem
};
