import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { LoginRequest, LoginResponse, SignUpResponse, SignUpRequest } from './types';

import { loginSuccess } from './authSlice';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: graphqlRequestBaseQuery({
    url: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }) => ({
        document: gql`
          mutation login($input: LoginUserInput!) {
            login(loginUserInput: $input) {
              access_token
              user {
                firstName
                lastName
                email
                role
              }
            }
          }
        `,
        variables: {
          input: {
            email,
            password,
          },
        },
      }),
      transformResponse: (result: { login: LoginResponse }) => {
        return result.login;
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(loginSuccess(data));
        } catch (error) {}
      },
    }),

    signup: builder.mutation<SignUpResponse, SignUpRequest>({
      query: ({ firstName, lastName, email, role, password }) => ({
        document: gql`
          mutation signup($input: RegisterUserInput!) {
            signup(registerUserInput: $input) {
              firstName
              lastName
              email
              role
            }
          }
        `,
        variables: {
          input: {
            firstName,
            lastName,
            email,
            role,
            password,
          },
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
