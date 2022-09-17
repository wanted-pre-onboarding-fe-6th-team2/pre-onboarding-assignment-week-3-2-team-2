import { createSlice } from '@reduxjs/toolkit';
import { getCommentsThunk } from '@/actions/comments';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: {
    [getCommentsThunk.pending]: state => {
      state.isLoading = true;
    },
    [getCommentsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getCommentsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default commentsSlice.reducer;
