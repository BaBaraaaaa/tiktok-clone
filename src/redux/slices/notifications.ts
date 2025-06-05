import { mockNotifications } from '@/mockDb/mockDb';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {Notification} from '@/types/mock'
interface NotificationsState {
  notifications: Notification[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: NotificationsState = {
  notifications: mockNotifications,
  status: 'idle',
  error: undefined,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<Notification[]>) => {
      state.notifications = action.payload;
      state.status = 'succeeded';
    },
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find((n) => n.notificationId === action.payload);
      if (notification) {
        notification.isRead = true;
      }
    },
    setNotificationsStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setNotificationsError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setNotifications, addNotification, markNotificationAsRead, setNotificationsStatus, setNotificationsError } = notificationsSlice.actions;
export default notificationsSlice.reducer;
