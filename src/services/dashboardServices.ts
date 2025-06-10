// src/services/videoService.ts
import apiClient from './apiClient';
import type { Video } from '@/types/model'; // kiểu video nếu có

export const fetchDashboard = async () => {
  const response = await apiClient.get('/');
  return response.data;
};
// Tạo video mới
export const createVideo = async (videoData: Omit<Video, 'videoId' | 'createdAt' | 'updatedAt' | 'views'>): Promise<Video> => {
  try {
    const response = await apiClient.post('/videos', videoData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Lỗi khi tạo video');
  }
};

// Cập nhật video
export const updateVideo = async (videoId: string, videoData: Partial<Video>): Promise<Video> => {
  try {
    const response = await apiClient.put(`/videos/${videoId}`, videoData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Lỗi khi cập nhật video');
  }
};

// Xóa video
export const deleteVideo = async (videoId: string): Promise<void> => {
  try {
    await apiClient.delete(`/videos/${videoId}`);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Lỗi khi xóa video');
  }
};
