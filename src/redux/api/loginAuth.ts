import { SendData } from '../types';

import api from './api';

export const loginAuth = async (data: SendData) => {
  return await api.post('auth/login', data);
};
