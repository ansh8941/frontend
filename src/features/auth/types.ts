export interface LoginPayload {
  username: string;
  password: string;
  type: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

export interface User {
  id: number | string;
  name: string;
}
