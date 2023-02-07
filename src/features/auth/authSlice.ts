import { AuthState, LoginPayload, User } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  loading: false,
  userInfo: {},
  token: '',
  error: '',
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: LoginPayload) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.token = action.payload.token ? action.payload.token : '';
    },
    loginFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      console.log(action.payload);
    },

    logout: (state) => {
      state.token = '';
      state.userInfo = {};
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
