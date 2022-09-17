import { createAsyncThunk } from '@reduxjs/toolkit';
import commentsApiService from '@/api/commentsApiService';

export const getCommentsThunk = createAsyncThunk('comments/getComments', async thunkAPI => {
  try {
    const comments = await commentsApiService.getComments();
    return comments;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
