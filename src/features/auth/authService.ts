import { httpClient } from '../../utils/httpClient';
import { LoginPayload } from './types';

// const register = ({ name, email, password }) => {
//   return axios.post(process.env.REACT_APP_API_URL + '/api/register', {
//     name,
//     email,
//     password,
//   });
// };

const login = ({ payload: { username, password } }: LoginPayload) => {
  return httpClient({
    url: `auth/login`,
    method: 'POST',
    data: { username, password },
  });
};
// const logout = () => {
//   return axios.post(process.env.REACT_APP_API_URL + '/api/logout', null, {
//     withCredentials: true,
//     credentials: 'include',
//   });
// };

// const refreshtoken = () => {
//   return axios.post(process.env.REACT_APP_API_URL + '/api/refreshtoken', null, {
//     withCredentials: true,
//     credentials: 'include',
//   });
// };

export {
  // register,
  login,
  // logout,
  // refreshtoken,
};
