// import { createAsyncThunk } from '@reduxjs/toolkit';
import commentsApiService from '@/api/commentsApiService';
import { ACTION_TYPE } from '@/constants/actionType';

export const getCommentsThunk = () => async dispatch => {
  dispatch({ type: ACTION_TYPE.GET_COMMENTS });
  try {
    const comments = await commentsApiService.getComments();
    dispatch({ type: ACTION_TYPE.GET_COMMENTS_SUCCESS, comments });
  } catch (error) {
    dispatch({ type: ACTION_TYPE.GET_COMMENTS_FAILURE, error });
  }
};

export const getCommentThunk = commentId => async dispatch => {
  dispatch({ type: ACTION_TYPE.GET_COMMENT });
  try {
    const comment = await commentsApiService.getComment({ commentId });
    dispatch({ type: ACTION_TYPE.GET_COMMENT_SUCCESS, comment });
  } catch (error) {
    dispatch({ type: ACTION_TYPE.GET_COMMENT_FAILURE, error });
  }
};

export const addCommentThunk = newComment => async dispatch => {
  const { profileUrl, author, content, createdAt } = newComment;
  dispatch({ type: ACTION_TYPE.ADD_COMMENT });
  try {
    const comment = await commentsApiService.createComment({
      comment: { profileUrl, author, content, createdAt },
    });
    dispatch({ type: ACTION_TYPE.ADD_COMMENT_SUCCESS, payload: comment });
  } catch (error) {
    dispatch({ type: ACTION_TYPE.ADD_COMMENT_FAILURE, payload: error });
  }
};

export const updateCommentThunk = (commentId, comment) => async dispatch => {
  dispatch({ type: ACTION_TYPE.UPDATE_COMMENT });
  try {
    const comments = await commentsApiService.updateComment({
      commentId,
      comment,
    });
    dispatch({ type: ACTION_TYPE.UPDATE_COMMENT_SUCCESS, payload: comments });
  } catch (error) {
    dispatch({ type: ACTION_TYPE.UPDATE_COMMENT_FAILURE, payload: error });
  }
};

export const deleteCommentThunk = commentId => async dispatch => {
  dispatch({ type: ACTION_TYPE.DELETE_COMMENT });
  try {
    const comments = await commentsApiService.deleteComment({ commentId });
    dispatch({ type: ACTION_TYPE.DELETE_COMMENT_SUCCESS, comments });
  } catch (error) {
    dispatch({ type: ACTION_TYPE.DELETE_COMMENT_FAILURE, error });
  }
};
