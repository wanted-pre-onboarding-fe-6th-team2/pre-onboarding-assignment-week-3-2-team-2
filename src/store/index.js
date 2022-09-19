import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import commentsReducer from '@/store/comments';

const store = configureStore({
  reducer: { comments: commentsReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
