import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import commentsReducer from '@/reducers/commentsSlice';
import commentReducer from '@/reducers/commentSlice';

const store = configureStore({
  reducer: { comments: commentsReducer, comment: commentReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
