import api from './api';

export const getUser = async (id: string) => {
  return await api.get(`users/${id}`);
};
