import { SendData } from '../types';

import api from './api';

export const loginAuth = async (data: SendData) => {
  return await api.post(import.meta.env.VITE_APP_LOGIN_URL, data);
};
