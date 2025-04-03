import { SendData } from '../types';

import api from './api';

export const register = async (data: SendData) => {
  return await api.post(import.meta.env.VITE_APP_REGISTER_URL, data);
};
