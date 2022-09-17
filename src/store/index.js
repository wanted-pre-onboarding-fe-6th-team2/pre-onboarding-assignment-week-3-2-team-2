// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import commentReducer from '@/reducers/commentReducer';

// const logger = createLogger();

// const store = createStore(commentReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

// export default store;

// RTK Store
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
