import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import commentsApiService from '@/api/commentsApiService';

export const getCommentsThunk = createAsyncThunk('comments/getComments', async thunkAPI => {
  try {
    const comments = await commentsApiService.getComments();
    return comments;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

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
