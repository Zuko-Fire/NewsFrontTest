import axios from 'axios';

import { readTokenFromLS } from '../../lib/local-storage';

const api = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = readTokenFromLS();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default api;
