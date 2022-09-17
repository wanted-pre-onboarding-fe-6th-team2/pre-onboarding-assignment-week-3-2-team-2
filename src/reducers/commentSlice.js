import { createSlice } from '@reduxjs/toolkit';
import {
  getCommentThunk,
  addCommentThunk,
  updateCommentThunk,
  deleteCommentThunk,
} from '@/actions/comment';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  extraReducers: {
    [getCommentThunk.pending]: state => {
      state.isLoading = true;
    },
    [getCommentThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getCommentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [addCommentThunk.pending]: state => {
      state.isLoading = true;
    },
    [addCommentThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [addCommentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [updateCommentThunk.pending]: state => {
      state.isLoading = true;
    },
    [updateCommentThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [updateCommentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [deleteCommentThunk.pending]: state => {
      state.isLoading = true;
    },
    [deleteCommentThunk.fulfilled]: state => {
      state.isLoading = false;
    },
    [deleteCommentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default commentSlice.reducer;
