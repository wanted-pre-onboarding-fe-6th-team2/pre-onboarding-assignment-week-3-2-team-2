import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import commentsApiService from '@/api/commentsApiService';

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
  comments: [],
  comment: null,
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
      state.comments = action.payload;
    },
    [getCommentsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [addCommentThunk.pending]: state => {
      state.isLoading = true;
    },
    [addCommentThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
      state.comments = [action.payload, ...state.comments];
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
      state.comment = action.payload;
      state.comments = state.comments.map(comment => {
        if (comment.id === action.payload.id) return action.payload;
        return comment;
      });
    },
    [updateCommentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [deleteCommentThunk.pending]: state => {
      state.isLoading = true;
    },
    [deleteCommentThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
    [deleteCommentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default commentsSlice.reducer;
