export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  uploadedAt: string;
  duration: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}
export interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscriberCount: number;
}
// Interface cho Search History
export interface SearchHistory {
  id: string;
  query: string;
  timestamp: string;
}
