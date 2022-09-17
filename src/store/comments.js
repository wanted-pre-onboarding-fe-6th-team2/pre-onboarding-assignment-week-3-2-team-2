import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import commentsApiService from '@/api/commentsApiService';
import { extraReducerUtils } from '@/lib/asyncUtils';

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
  extraReducers: extraReducerUtils(getCommentsThunk),
});

export default commentsSlice.reducer;
