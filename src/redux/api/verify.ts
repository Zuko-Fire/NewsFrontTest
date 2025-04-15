import api from './api';

export const verify = async () => {
  return await api.get('auth/verify');
};
