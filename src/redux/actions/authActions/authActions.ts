import {
  AUTH_SIGN_OUT,
  AUTH_FAILED,
  AUTH_REQUESTED,
  AUTH_SUCCEED,
  AUTH_VERIFY_REQUESTED
} from '../../constants';
import { Auth, AuthPayload } from '../../types';

export const actionRequested = (payload: AuthPayload) => ({
  type: AUTH_REQUESTED,
  payload
});

export const actionSucceed = (payload: Auth) => ({
  type: AUTH_SUCCEED,
  payload
});

export const actionFailed = (error: string) => ({
  type: AUTH_FAILED,
  error
});

export const actionVerify = () => ({ type: AUTH_VERIFY_REQUESTED });
export const actionSingOut = () => ({ type: AUTH_SIGN_OUT });
