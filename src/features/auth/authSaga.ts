import { delay, put, takeLatest } from 'redux-saga/effects';
import { authActions } from './authSlice';
import { LoginPayload, User } from './types';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000); // yield call(api, '')
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        // Dispatch action
        id: 1,
        name: 'Zendy',
      })
    );
  } catch (error) {
    //yield put(authActions.loginFailed(error.message)); // Dispatch action
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');
}

export const authSaga = [
  takeLatest(authActions.login.type, handleLogin),
  takeLatest(authActions.logout.type, handleLogout),
];
