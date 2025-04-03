import {
  AUTH_SIGN_OUT,
  AUTH_FAILED,
  AUTH_REQUESTED,
  AUTH_SUCCEED,
  AUTH_VERIFY_REQUESTED,
  EDIT_USER_SUCCEED,
  SHOW_MODAL
} from '../constants';

import authReducer, { initialState } from './authReducer';

describe('authReducer', () => {
  it('Возвращает initialState по умолчанию', () => {
    expect(authReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('выполняется AUTH_REQUESTED', () => {
    const action = { type: AUTH_REQUESTED };
    const expectedState = {
      ...initialState,
      isLoading: true
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('Выполняется AUTH_VERIFY_REQUESTED', () => {
    const action = { type: AUTH_VERIFY_REQUESTED };
    const expectedState = {
      ...initialState,
      isLoading: true
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('Выполняется AUTH_SUCCEED', () => {
    const user = { id: 1, name: 'John Doe' };
    const action = { type: AUTH_SUCCEED, payload: { user } };
    const expectedState = {
      ...initialState,
      authUser: user,
      isLoading: false,
      error: null
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('Выполняется AUTH_FAILED', () => {
    const error = 'Authentication failed';
    const action = { type: AUTH_FAILED, error };
    const expectedState = {
      ...initialState,
      error,
      authUser: null,
      isLoading: false
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('Выполняется AUTH_SIGN_OUT', () => {
    const currentState = {
      ...initialState,
      authUser: { id: 1, name: 'John Doe' }
    };
    const action = { type: AUTH_SIGN_OUT };
    const expectedState = {
      ...initialState,
      authUser: null
    };

    expect(authReducer(currentState, action)).toEqual(expectedState);
  });

  it('Выполняется EDIT_USER_SUCCEED', () => {
    const user = { id: 1, name: 'Jane Doe' };
    const action = { type: EDIT_USER_SUCCEED, user };
    const expectedState = {
      ...initialState,
      isLoading: false,
      authUser: user
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('Выполняется SHOW_MODAL', () => {
    const currentState = {
      ...initialState,
      error: 'Some error'
    };
    const action = { type: SHOW_MODAL };
    const expectedState = {
      ...initialState,
      error: null
    };

    expect(authReducer(currentState, action)).toEqual(expectedState);
  });
});
