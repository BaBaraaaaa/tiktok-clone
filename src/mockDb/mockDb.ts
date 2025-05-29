export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  uploader: string;
  uploadDate: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'React Tutorial for Beginners',
    thumbnail: '',
    duration: '10:30',
    views: 15000,
    uploader: 'John Doe',
    uploadDate: '2025-05-20',
  },
  {
    id: '2',
    title: 'TypeScript with Redux',
    thumbnail: '',
    duration: '15:45',
    views: 22000,
    uploader: 'Jane Smith',
    uploadDate: '2025-05-25',
  },
];

export const mockUsers: User[] = [
  { id: 'u1', name: 'John Doe', avatar: '' },
  { id: 'u2', name: 'Jane Smith', avatar: '' },
];
