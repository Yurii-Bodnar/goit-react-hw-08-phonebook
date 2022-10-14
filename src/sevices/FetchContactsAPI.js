import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const addContactAPI = async data => {
  const res = await axios.post('contacts', data);
  return res.data;
};

export const fetchContacts = async () => {
  try {
    const response = await axios.get('contacts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactAPI = id => {
  return axios.delete(`contacts/${id}`).then(() => id);
};
