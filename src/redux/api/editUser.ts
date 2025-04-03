import { EditUserPayload } from '../types';

import api from './api';

export const editUser = async (payload: EditUserPayload) => {
  return await api.patch(
    `${import.meta.env.VITE_APP_GET_USER_URL}${payload.id}`,
    payload.userData
  );
};
