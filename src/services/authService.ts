// src/services/authService.ts
import apiClient from './apiClient';

export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
};

export const logout = async () => {
  await apiClient.post('/auth/logout');
};
