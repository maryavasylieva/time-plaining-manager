import axios from 'axios';

axios.defaults.baseURL = 'https://cheking.goit.co.ua/api/v1';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getTasks = async token => {
  try {
    const data = axios.get(`${token}`);
    return data;
  } catch (e) {
    return e;
  }
};

export const postTask = (task, token) => {
  axios.defaults.headers.common.Authorization = token;
  return axios.post('/tasks', task);
};

export const updateTask = (task, token, id) => {
  axios.defaults.headers.common.Authorization = token;
  return axios.put(`/tasks/${id}`, task);
};

export const deleteTask = (token, id) => {
  axios.defaults.headers.common.Authorization = token;
  return axios.delete(`/tasks/${id}`);
};
