export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
}

export interface AuthState {
  user?: null | any;
  access_token: null | string;
}

export interface LoginResponse {
  login: AuthState;
}

export interface SignUpResponse {
  signup: {
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: string;
  };
}
