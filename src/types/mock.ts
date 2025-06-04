// Interface cho thông tin người dùng
export interface User {
  userId: string; // ID duy nhất cho người dùng
  username: string; // Tên người dùng, duy nhất
  email: string; // Email, duy nhất
  passwordHash: string; // Mật khẩu đã mã hóa
  fullName?: string; // Tên đầy đủ (tùy chọn)
  profilePictureUrl?: string; // URL ảnh đại diện (tùy chọn)
  createdAt: Date; // Thời gian tạo tài khoản
  updatedAt: Date; // Thời gian cập nhật gần nhất
}

// Interface cho thông tin video
export interface Video {
  videoId: string; // ID duy nhất cho video
  userId: string; // ID của người dùng tải video lên
  title: string; // Tiêu đề video
  description?: string; // Mô tả video (tùy chọn)
  videoUrl: string; // URL của video
  thumbnailUrl?: string; // URL ảnh thumbnail (tùy chọn)
  duration: number; // Thời lượng video (giây)
  views: number; // Số lượt xem
  uploadDate: Date; // Ngày tải lên
  isPublic: boolean; // Trạng thái công khai hay riêng tư
  tags?: string[]; // Danh sách thẻ tag (tùy chọn)
}

// Interface cho bình luận
export interface Comment {
  commentId: string; // ID duy nhất cho bình luận
  videoId: string; // ID của video mà bình luận thuộc về
  userId: string; // ID của người dùng bình luận
  content: string; // Nội dung bình luận
  createdAt: Date; // Thời gian tạo bình luận
  updatedAt: Date; // Thời gian chỉnh sửa bình luận
  parentCommentId?: string; // ID của bình luận cha (nếu là trả lời, tùy chọn)
}

// Interface cho lượt thích/không thích video
export interface VideoReaction {
  reactionId: string; // ID duy nhất cho phản ứng
  videoId: string; // ID của video
  userId: string; // ID của người dùng
  isLike: boolean; // true = thích, false = không thích
  createdAt: Date; // Thời gian phản ứng
}

// Interface cho danh sách phát (playlist)
export interface Playlist {
  playlistId: string; // ID duy nhất cho danh sách phát
  userId: string; // ID của người dùng tạo playlist
  title: string; // Tiêu đề playlist
  description?: string; // Mô tả playlist (tùy chọn)
  isPublic: boolean; // Trạng thái công khai hay riêng tư
  createdAt: Date; // Thời gian tạo
  updatedAt: Date; // Thời gian cập nhật
  videoIds: string[]; // Danh sách ID của video trong playlist
}

// Interface cho thông tin đăng ký kênh
export interface Subscription {
  subscriptionId: string; // ID duy nhất cho đăng ký
  subscriberId: string; // ID của người dùng đăng ký
  channelId: string; // ID của kênh (người dùng khác)
  subscribedAt: Date; // Thời gian đăng ký
}

// Interface cho thông báo
export interface Notification {
  notificationId: string; // ID duy nhất cho thông báo
  userId: string; // ID của người dùng nhận thông báo
  type: 'video_upload' | 'comment' | 'like' | 'subscription'; // Loại thông báo
  referenceId: string; // ID tham chiếu (video, bình luận, v.v.)
  message: string; // Nội dung thông báo
  isRead: boolean; // Trạng thái đã đọc hay chưa
  createdAt: Date; // Thời gian tạo thông báo
}