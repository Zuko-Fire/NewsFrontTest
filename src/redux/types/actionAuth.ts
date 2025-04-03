import {
  AUTH_REQUESTED,
  AUTH_SUCCEED,
  AUTH_FAILED,
  AUTH_VERIFY_REQUESTED,
  AUTH_SIGN_OUT,
  SHOW_MODAL
} from '../constants';

import { ActionEditUserSucceed } from './actionUser';

import { AuthPayload, Auth } from '.';

export interface ActionRequested {
  type: typeof AUTH_REQUESTED;
  payload: AuthPayload;
}

export interface ActionSucceed {
  type: typeof AUTH_SUCCEED;
  payload: Auth;
}

export interface ActionFailed {
  type: typeof AUTH_FAILED;
  error: string;
}

export interface ActionVerify {
  type: typeof AUTH_VERIFY_REQUESTED;
}
export interface ActionSingOut {
  type: typeof AUTH_SIGN_OUT;
}

export interface ActionAuthInitState {
  error: null,
  authUser: null,
  isLoading: boolean,
}

export interface ShowModalAction {
  type: typeof SHOW_MODAL;
  error: string | null
}

export type AuthAction =
  | ActionRequested
  | ActionSucceed
  | ActionFailed
  | ActionVerify
  | ActionSingOut
  | ActionEditUserSucceed
  | ShowModalAction
