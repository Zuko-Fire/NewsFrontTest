import {
  EDIT_USER_FAILED,
  EDIT_USER_REQUESTED,
  EDIT_USER_SUCCEED
} from '../../constants';
import { EditUserPayload, User } from '../../types';

export const actionEditUserRequested = (payload: EditUserPayload) => ({
  type: EDIT_USER_REQUESTED,
  payload
});

export const actionEditUserSucceed = (user: User) => ({
  type: EDIT_USER_SUCCEED,
  user
});

export const actionEditUserFailed = (error?: string) => ({
  type: EDIT_USER_FAILED,
  error
});
