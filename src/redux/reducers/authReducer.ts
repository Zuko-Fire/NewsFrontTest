import {
  AUTH_SIGN_OUT,
  AUTH_FAILED,
  AUTH_REQUESTED,
  AUTH_SUCCEED,
  AUTH_VERIFY_REQUESTED,
  EDIT_USER_SUCCEED,
  SHOW_MODAL
} from '../constants';
import { ActionAuthInitState, AuthAction } from '../types/actionAuth';

export const initialState: ActionAuthInitState = {
  authUser: null,
  isLoading: false,
  error: null
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_SUCCEED:
      return {
        ...state,
        authUser: action.payload.user,
        isLoading: false,
        error: null
      };
    case AUTH_FAILED:
      return {
        ...state,
        error: action.error,
        authUser: null,
        isLoading: false
      };
    case AUTH_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_VERIFY_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_SIGN_OUT:
      return {
        ...state,
        authUser: null
      };
    case EDIT_USER_SUCCEED:
      return {
        ...state,
        isLoading: false,
        authUser: action.user
      };
    case SHOW_MODAL:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
export default authReducer;
