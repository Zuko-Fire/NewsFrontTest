import { News } from '../types';

import api from './api';

export const fetchNews = async () => {
  return await api.get<News[]>('news');
};
