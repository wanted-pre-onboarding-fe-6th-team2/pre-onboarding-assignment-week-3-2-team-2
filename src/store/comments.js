import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import commentsApiService from '@/api/commentsApiService';
import { extraReducerUtils } from '@/lib/extraReducerUtils';

export const getCommentsThunk = createAsyncThunk(
  'comments/getComments',
  async (currentPage, limit, thunkAPI) => {
    try {
      const commentsResponse = await commentsApiService.getComments({
        page: currentPage,
        limit,
      });
      const { data, headers } = await commentsResponse;
      const totalCount = headers['x-total-count'];
      return { data, totalCount };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: extraReducerUtils(getCommentsThunk),
});

export default commentsSlice.reducer;
