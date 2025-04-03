import api from './api';

export const verify = async () => {
  return await api.get(import.meta.env.VITE_APP_TOKEN_AUTH_URL);
};
