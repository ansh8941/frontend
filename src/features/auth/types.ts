export interface LoginPayload {
  payload: {
    username: string;
    password: string;
  };
  type: string;
}

export interface User {
  id?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
  token?: string;
}

export interface AuthState {
  loading: boolean;
  userInfo: User;
  token: string;
  error: string;
  success: boolean;
}
