import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerApi = async data => {
  const res = await axios.post('/users/signup', data);
  setAuthHeader(res.data.token);
  return res.data;
};
export const logInApi = async data => {
  const res = await axios.post('/users/login', data);
  setAuthHeader(res.data.token);
  console.log(res.data);
  return res.data;
};

export const logOutApi = async () => {
  const res = await axios.post('/users/logout');
  clearAuthHeader();
  return res.data;
  // return res
};
export const getCurrentUser = async token => {
  try {
    setAuthHeader(token);
    const res = await axios.get('/users/current');

    return res.data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};
