import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import authReducer from '../features/auth/authSlice';
import rootSaga from './rootSaga';

// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ serializableCheck: false, thunk: false }), sagaMiddleware];

const reducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
