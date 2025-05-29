import type { Channel, SearchHistory, User, Video } from '@/types/mock';
import { v4 as uuidv4 } from 'uuid';
export const mockVideos: Video[] = [
  {
    id: uuidv4(),
    title: 'How to Build a YouTube Clone with React',
    thumbnail: 'https://via.placeholder.com/320x180',
    channel: 'TechWithTim',
    views: 150000,
    uploadedAt: '2025-05-25',
    duration: '12:34',
  },
  {
    id: uuidv4(),
    title: 'Top 10 Programming Tips in 2025',
    thumbnail: 'https://via.placeholder.com/320x180',
    channel: 'TrungQuanDev',
    views: 85000,
    uploadedAt: '2025-05-20',
    duration: '08:15',
  },
  {
    id: uuidv4(),
    title: 'Learn JavaScript in 1 Hour',
    thumbnail: 'https://via.placeholder.com/320x180',
    channel: 'FreeCodeCamp',
    views: 200000,
    uploadedAt: '2025-05-15',
    duration: '60:00',
  },
  {
    id: uuidv4(),
    title: 'React vs Vue: Which is Better?',
    thumbnail: 'https://via.placeholder.com/320x180',
    channel: 'CodingAddict',
    views: 45000,
    uploadedAt: '2025-05-10',
    duration: '15:20',
  },
  {
    id: uuidv4(),
    title: 'Beginner Guide to CSS Grid',
    thumbnail: 'https://via.placeholder.com/320x180',
    channel: 'WebDevSimplified',
    views: 120000,
    uploadedAt: '2025-05-05',
    duration: '25:45',
  },
];
export const mockChannels: Channel[] = [
  {
    id: uuidv4(),
    name: 'TechWithTim',
    avatar: 'https://via.placeholder.com/40',
    subscriberCount: 500000,
  },
  {
    id: uuidv4(),
    name: 'TrungQuanDev',
    avatar: 'https://via.placeholder.com/40',
    subscriberCount: 250000,
  },
  {
    id: uuidv4(),
    name: 'FreeCodeCamp',
    avatar: 'https://via.placeholder.com/40',
    subscriberCount: 4000000,
  },
  {
    id: uuidv4(),
    name: 'CodingAddict',
    avatar: 'https://via.placeholder.com/40',
    subscriberCount: 150000,
  },
  {
    id: uuidv4(),
    name: 'WebDevSimplified',
    avatar: 'https://via.placeholder.com/40',
    subscriberCount: 800000,
  },
];
export const mockSearchHistory: SearchHistory[] = [
  {
    id: uuidv4(),
    query: 'React tutorial',
    timestamp: '2025-05-29T10:00:00Z',
  },
  {
    id: uuidv4(),
    query: 'JavaScript basics',
    timestamp: '2025-05-28T15:30:00Z',
  },
  {
    id: uuidv4(),
    query: 'CSS grid layout',
    timestamp: '2025-05-27T09:15:00Z',
  },
  {
    id: uuidv4(),
    query: 'YouTube clone',
    timestamp: '2025-05-26T14:45:00Z',
  },
  {
    id: uuidv4(),
    query: 'Web development 2025',
    timestamp: '2025-05-25T11:20:00Z',
  },
];
export const mockUsers: User[] = [
  { id: 'u1', name: 'John Doe', avatar: '' },
  { id: 'u2', name: 'Jane Smith', avatar: '' },
];
