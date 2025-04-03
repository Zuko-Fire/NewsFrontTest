import { USER_REQUESTED, USER_RECEIVED, USER_FAILED } from '../../constants';
import { User } from '../../types';

export const actionUserRequested = (id: string) => ({
  type: USER_REQUESTED,
  id
});

export const actionUserReceived = (user: User) => ({
  type: USER_RECEIVED,
  user
});

export const actionUserFailed = (error?: string) => ({
  type: USER_FAILED,
  error
});
