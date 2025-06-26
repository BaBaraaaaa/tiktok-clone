export interface User {
  userId: string; // ID duy nhất cho người dùng
  username: string; // Tên người dùng, duy nhất
  email: string; // Email, duy nhất
  passwordHash: string; // Mật khẩu đã mã hóa
  fullName?: string; // Tên đầy đủ (tùy chọn)
  profilePictureUrl?: string; // URL ảnh đại diện (tùy chọn)
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Comment {
  commentId: string; // ID của comment
  videoId: string; // Tham chiếu đến Video
  userId: string; // Tham chiếu đến User
  content: string; // Nội dung bình luận
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  parentCommentId?: string; // Tham chiếu đến Comment (nếu là reply)
}

export interface Notification {
  notificationId: string; // ID của thông báo
  userId: string; // Tham chiếu đến User
  type: 'video_upload' | 'comment' | 'like' | 'subscription'; // Loại thông báo
  referenceId: string; // Tham chiếu đến resource liên quan (Video, Comment, v.v.)
  message: string; // Nội dung thông báo
  isRead: boolean; // Trạng thái đã đọc
  createdAt: string; // ISO date string
}

export interface Playlist {
  playlistId: string; // ID của playlist
  userId: string; // Tham chiếu đến User
  title: string; // Tiêu đề playlist
  description?: string; // Mô tả (tùy chọn)
  isPublic: boolean; // Trạng thái công khai
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  videoIds: string[]; // Mảng các ID video
}

export interface Subscription {
  subscriptionId: string; // ID của subscription
  subscriberId: string; // Tham chiếu đến User (người đăng ký)
  channelId: string; // Tham chiếu đến User (kênh)
  subscribedAt: string; // ISO date string
}

export interface Token {
  tokenId: string; // ID của token
  token: string; // Token string
  userId: string; // Tham chiếu đến User
  createdAt: string; // ISO date string
}

export interface Video {
  videoId: string; // ID của video
  userId: string; // Tham chiếu đến User
  title: string; // Tiêu đề video
  description?: string; // Mô tả (tùy chọn)
  videoUrl: string; // URL của video
  thumbnailUrl?: string; // URL ảnh thumbnail (tùy chọn)
  duration: number; // Thời lượng video (giây)
  views: number; // Số lượt xem
  uploadDate: string; // ISO date string
  isPublic: boolean; // Trạng thái công khai
  tags: string[]; // Mảng các tag
}

export interface VideoReaction {
  reactionId: string; // ID của reaction
  videoId: string; // Tham chiếu đến Video
  userId: string; // Tham chiếu đến User
  isLike: boolean; // Like hoặc dislike
  createdAt: string; // ISO date string
}