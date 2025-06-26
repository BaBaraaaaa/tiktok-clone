import type { User } from '@/types/model';
import axios, { type AxiosResponse } from 'axios';

// Cấu hình base URL cho API (thay bằng URL của backend)
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

// Tạo instance của axios với cấu hình mặc định
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hàm xử lý đăng nhập bằng Google
export const loginWithGoogle = async (googleToken: string): Promise<{ user: User; token: string }> => {
  try {
    const response: AxiosResponse = await apiClient.post('/auth/google', { idToken: googleToken });
    const { user, token } = response.data;

    // Đảm bảo dữ liệu user từ backend khớp với interface User
    const formattedUser: User = {
      userId: user.userId,
      username: user.username,
      email: user.email,
      passwordHash: user.passwordHash,
      fullName: user.fullName || undefined,
      profilePictureUrl: user.profilePictureUrl || undefined,
      createdAt: new Date(user.createdAt).toString(),
      updatedAt: new Date(user.updatedAt).toString(),
    };

    return { user: formattedUser, token };
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Lỗi khi đăng nhập bằng Google');
  }
};

// Hàm xử lý đăng xuất
export const logout = async (token: string): Promise<void> => {
  try {
    await apiClient.post('/auth/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Lỗi khi đăng xuất');
  }
};