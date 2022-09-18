import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import commentsReducer from '@/store/comments';
import commentReducer from '@/store/comment';

const store = configureStore({
  reducer: { comments: commentsReducer, comment: commentReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
