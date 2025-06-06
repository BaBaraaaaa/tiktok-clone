// src/services/videoService.ts
import apiClient from './apiClient';
import type { Video } from '@/types/mock'; // kiểu video nếu có

export const fetchDashboard = async (): Promise<Video[]> => {
  const response = await apiClient.get('/');
  return response.data;
};


// Thêm các api khác cho video ở đây (create, update, delete)
