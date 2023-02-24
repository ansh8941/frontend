import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './services';
import authReducer from '../features/auth/authSlice';

const reducer = {
  [authApi.reducerPath]: authApi.reducer,
  authReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([authApi.middleware]),
});

//sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
