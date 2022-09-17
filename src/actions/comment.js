import { createAsyncThunk } from '@reduxjs/toolkit';
import commentsApiService from '@/api/commentsApiService';

export const getCommentThunk = createAsyncThunk(
  'comment/getComment',
  async (commentId, thunkAPI) => {
    try {
      const comment = await commentsApiService.getComment({ commentId });
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
      await commentsApiService.deleteComment({ commentId });
      // TODO: Async arrow function expected no return value. eslint consistent-return
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
