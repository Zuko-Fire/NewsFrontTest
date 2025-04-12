import { EditUserPayload } from '../types';

import api from './api';

export const editUser = async (payload: EditUserPayload) => {
  return await api.patch(
    `${payload.id}`,
    payload.userData
  );
};
