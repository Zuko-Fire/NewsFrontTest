import {
  EDIT_USER_FAILED,
  EDIT_USER_REQUESTED,
  EDIT_USER_SUCCEED,
  USER_FAILED,
  USER_RECEIVED,
  USER_REQUESTED
} from '../constants';
import { UserAction, UserState } from '../types';

export const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
  userNews: []
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case USER_RECEIVED:
      return {
        ...state,
        isLoading: false,
        user: action.user,
        userNews: action.user?.news,
        error: null
      };
    case USER_FAILED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.error
      };
    case EDIT_USER_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case EDIT_USER_SUCCEED:
      return {
        ...state,
        isLoading: false,
        user: action.user
      };
    case EDIT_USER_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        user: null
      };
    default:
      return state;
  }
};
export default userReducer;
