import { EDIT_USER_REQUESTED, EDIT_USER_SUCCEED, EDIT_USER_FAILED } from '../constants';

import { EditUserPayload, User } from '.';

export interface ActionEditUserRequested {
  type: typeof EDIT_USER_REQUESTED;
  payload: EditUserPayload;
}

export interface ActionEditUserSucceed {
  type: typeof EDIT_USER_SUCCEED;
  user: User;
}

export interface ActionEditUserFailed {
  type: typeof EDIT_USER_FAILED;
  error: string;
}

export type UserAction =
ActionEditUserRequested
| ActionEditUserSucceed
| ActionEditUserFailed;
