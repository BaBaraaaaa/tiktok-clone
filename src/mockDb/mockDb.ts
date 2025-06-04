// src/mockDb/mockDb.ts
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import type { Playlist, Subscription, User, Video, VideoReaction } from '@/types/mock';
import type { SearchHistory } from '@/redux/type';
import type { Comment, Notification } from '@/types/mock';
// Mock Users
export const mockUsers: User[] = Array.from({ length: 10 }, () => ({
  userId: uuidv4(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  passwordHash: faker.string.alphanumeric(64), // Giả lập hash mật khẩu
  fullName: faker.person.fullName(),
  profilePictureUrl: faker.image.avatar(),
  createdAt: faker.date.past({ years: 2 }),
  updatedAt: faker.date.recent({ days: 30 }),
}));

// Mock Videos
export const mockVideos: Video[] = Array.from({ length: 20 }, () => ({
  videoId: uuidv4(),
  userId: faker.helpers.arrayElement(mockUsers).userId, // Liên kết với user ngẫu nhiên
  title: faker.lorem.sentence({ min: 3, max: 10 }),
  description: faker.lorem.paragraph({ min: 1, max: 3 }),
  videoUrl: `${faker.internet.url()}/video.mp4`,
  thumbnailUrl: faker.image.url({ width: 500, height: 280 }),
  duration: faker.number.int({ min: 60, max: 3600 }), // Thời lượng từ 1 phút đến 1 giờ
  views: faker.number.int({ min: 1000, max: 10000000 }),
  uploadDate: faker.date.past({ years: 1 }),
  isPublic: faker.datatype.boolean(0.8), // 80% công khai
  tags: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.lorem.word()),
}));

// Mock Shorts (Video với thời lượng ngắn)
export const mockShorts: Video[] = Array.from({ length: 15 }, () => ({
  videoId: uuidv4(),
  userId: faker.helpers.arrayElement(mockUsers).userId,
  title: faker.lorem.sentence({ min: 3, max: 6 }),
  description: faker.lorem.sentence({ min: 1, max: 2 }),
  videoUrl: `${faker.internet.url()}/short.mp4`,
  thumbnailUrl: faker.image.url({ width: 360, height: 640 }), // Tỷ lệ 9:16 cho shorts
  duration: faker.number.int({ min: 15, max: 60 }), // Thời lượng từ 15 đến 60 giây
  views: faker.number.int({ min: 500, max: 5000000 }),
  uploadDate: faker.date.past({ years: 1 }),
  isPublic: true, // Shorts thường công khai
  tags: ['short', ...Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.lorem.word())],
}));

// Mock Channels (sử dụng User làm kênh)
export const mockChannels: User[] = mockUsers; // Mỗi user là một kênh

// Mock Playlists
export const mockPlaylists: Playlist[] = Array.from({ length: 10 }, () => ({
  playlistId: uuidv4(),
  userId: faker.helpers.arrayElement(mockUsers).userId,
  title: faker.lorem.words({ min: 2, max: 5 }),
  description: faker.lorem.sentence({ min: 1, max: 3 }),
  isPublic: faker.datatype.boolean(0.7), // 70% công khai
  createdAt: faker.date.past({ years: 1 }),
  updatedAt: faker.date.recent({ days: 30 }),
  videoIds: faker.helpers.arrayElements(
    mockVideos.map((v) => v.videoId),
    { min: 1, max: 5 },
  ), // Chọn ngẫu nhiên 1-5 video
}));

// Mock Comments
export const mockComments: Comment[] = Array.from({ length: 30 }, () => ({
  commentId: uuidv4(),
  videoId: faker.helpers.arrayElement(mockVideos).videoId,
  userId: faker.helpers.arrayElement(mockUsers).userId,
  content: faker.lorem.sentence({ min: 5, max: 20 }),
  createdAt: faker.date.past({ years: 1 }),
  updatedAt: faker.date.recent({ days: 30 }),
  parentCommentId: undefined,
}));
mockComments.forEach((comment, index) => {
  if (faker.datatype.boolean(0.3)) {
    const parentCandidates = mockComments.filter((c, i) => i < index); // Chỉ chọn từ những comment trước để tránh vòng lặp
    if (parentCandidates.length > 0) {
      comment.parentCommentId = faker.helpers.arrayElement(parentCandidates).commentId;
    }
  }
});
// Mock Video Reactions
export const mockVideoReactions: VideoReaction[] = Array.from({ length: 50 }, () => ({
  reactionId: uuidv4(),
  videoId: faker.helpers.arrayElement(mockVideos).videoId,
  userId: faker.helpers.arrayElement(mockUsers).userId,
  isLike: faker.datatype.boolean(0.8), // 80% là lượt thích
  createdAt: faker.date.past({ years: 1 }),
}));

// Mock Subscriptions
export const mockSubscriptions: Subscription[] = Array.from({ length: 20 }, () => {
  const subscriberId = faker.helpers.arrayElement(mockUsers).userId;
  let channelId = faker.helpers.arrayElement(mockUsers).userId;

  // Đảm bảo subscriberId không trùng với channelId
  while (channelId === subscriberId) {
    channelId = faker.helpers.arrayElement(mockUsers).userId;
  }

  return {
    subscriptionId: uuidv4(),
    subscriberId,
    channelId,
    subscribedAt: faker.date.past({ years: 1 }),
  };
});

// Mock Notifications
export const mockNotifications: Notification[] = Array.from({ length: 20 }, () => {
  const type = faker.helpers.arrayElement(['video_upload', 'comment', 'like', 'subscription'] as const);
  let referenceId: string;

  switch (type) {
    case 'video_upload':
      referenceId = faker.helpers.arrayElement(mockVideos).videoId;
      break;
    case 'comment':
      referenceId = faker.helpers.arrayElement(mockComments).commentId;
      break;
    case 'like':
      referenceId = faker.helpers.arrayElement(mockVideoReactions).reactionId;
      break;
    case 'subscription':
      referenceId = faker.helpers.arrayElement(mockSubscriptions).subscriptionId;
      break;
    default:
      referenceId = uuidv4();
  }

  return {
    notificationId: uuidv4(),
    userId: faker.helpers.arrayElement(mockUsers).userId,
    type,
    referenceId,
    message: faker.lorem.sentence({ min: 5, max: 15 }),
    isRead: faker.datatype.boolean(0.4), // 40% đã đọc
    createdAt: faker.date.recent({ days: 30 }),
  };
});

// Mock Search History
export const mockSearchHistory: SearchHistory[] = Array.from({ length: 10 }, () => ({
  id: uuidv4(),
  query: faker.lorem.words({ min: 1, max: 4 }),
  timestamp: faker.date.recent({ days: 30 }).toISOString(),
}));
