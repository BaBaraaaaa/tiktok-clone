// src/services/videoService.ts
import apiClient from './apiClient';
import type { Video } from '@/types/model'; // kiểu video nếu có

export const fetchVideos = async (): Promise<Video[]> => {
  const response = await apiClient.get('/videos');
  return response.data;
};

export const fetchVideoById = async (id: string): Promise<Video> => {
  const response = await apiClient.get(`/videos/${id}`);
  return response.data;
};

// Thêm các api khác cho video ở đây (create, update, delete)
