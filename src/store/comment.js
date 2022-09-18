import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentsApiService from '@/api/commentsApiService';
import { extraReducerUtils } from '@/lib/extraReducerUtils';

export const getCommentThunk = createAsyncThunk(
  'comment/getComment',
  async (commentId, thunkAPI) => {
    try {
      const commentResponse = await commentsApiService.getComment({ commentId });
      const comment = await commentResponse.data;
      return comment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCommentThunk = createAsyncThunk('comment/addComment', async (comment, thunkAPI) => {
  try {
    const newComment = await commentsApiService.createComment({ comment });
    return newComment;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateCommentThunk = createAsyncThunk(
  'comment/updateComment',
  async ({ commentId, comment }, thunkAPI) => {
    try {
      const newComment = await commentsApiService.updateComment({ commentId, comment });
      return newComment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCommentThunk = createAsyncThunk(
  'comment/deleteComment',
  async (commentId, thunkAPI) => {
    try {
      return await commentsApiService.deleteComment({ commentId });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  extraReducers: {
    ...extraReducerUtils(getCommentThunk),
    ...extraReducerUtils(addCommentThunk),
    ...extraReducerUtils(updateCommentThunk),
    ...extraReducerUtils(deleteCommentThunk),
  },
});

export default commentSlice.reducer;
