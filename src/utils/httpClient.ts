import axios from 'axios';
import cookie from 'js-cookie';

/**
 * Create the axios instance
 */

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});
/**
 * Intercept the response
 */
instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export const httpClient = async (options: any) => {
  if (!options.headers) options.headers = {};
  if (!options.method) {
    options.method = 'POST';
  }
  const token = getToken();
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  } else {
    options.headers.Authorization = null;
  }
  try {
    const res = await instance(options);
    return res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Get the token
 * @returns
 */
export const getToken = () => cookie.get('token') || null;
