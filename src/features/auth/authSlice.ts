import { AuthState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  user: {},
  access_token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
    logout: (state) => {
      state.user = {};
      state.access_token = '';
    },
  },
});

// Actions
export const { loginSuccess } = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
