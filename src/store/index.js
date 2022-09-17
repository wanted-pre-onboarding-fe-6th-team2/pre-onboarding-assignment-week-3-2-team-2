import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import commentReducer from '@/reducers/commentReducer';

const logger = createLogger();

const store = createStore(commentReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;

// RTK Store
// import { configureStore } from '@reduxjs/toolkit';
// import commentReducer from '@/reducers/commentReducer';

// const isDev = process.env.NODE_ENV === 'development';

// const store = configureStore({
//   reducer: { comment: commentReducer },
//   devTools: isDev,
// });

// export default store;
