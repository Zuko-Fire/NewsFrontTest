import api from './api';

export const getUser = async (id: string) => {
  return await api.get(`${import.meta.env.VITE_APP_GET_USER_URL}${id}`);
};
