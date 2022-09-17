import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
