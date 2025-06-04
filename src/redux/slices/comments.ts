import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mockComments } from '@/mockDb/mockDb'; // Giả lập dữ liệu comments
import type { Comment } from '@/types/mock'
interface CommentsState {
  comments: Comment[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: CommentsState = {
  comments: mockComments,
  status: 'idle',
  error: undefined,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
      state.status = 'succeeded';
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    updateComment: (state, action: PayloadAction<Comment>) => {
      const index = state.comments.findIndex((comment) => comment.commentId === action.payload.commentId);
      if (index !== -1) {
        state.comments[index] = action.payload;
      }
    },
    setCommentsStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setCommentsError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const { setComments, addComment, updateComment, setCommentsStatus, setCommentsError } = commentsSlice.actions;
export default commentsSlice.reducer;