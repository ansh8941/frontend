import { delay, put, takeLatest, call } from 'redux-saga/effects';
import { authActions } from './authSlice';
import { login } from './authService';

import { LoginPayload, User } from './types';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);
    const response: User = yield call(login, payload);
    yield put(authActions.loginSuccess(response));
  } catch (error) {
    yield put(authActions.loginFailed(error));
  }
}

function* handleLogout() {
  yield delay(500);
  yield put(authActions.logout());
}

export const authSaga = [
  takeLatest(authActions.login.type, handleLogin),
  takeLatest(authActions.logout.type, handleLogout),
];
