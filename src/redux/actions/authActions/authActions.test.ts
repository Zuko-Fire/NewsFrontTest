import {
  AUTH_FAILED,
  AUTH_REQUESTED, AUTH_SIGN_OUT, AUTH_SUCCEED, AUTH_VERIFY_REQUESTED 
} from '../../constants';
import { Auth, AuthPayload } from '../../types';

import {
  actionFailed, actionRequested, actionSingOut, actionSucceed, actionVerify 
} from './authActions';

describe('AuthActions', ()=> {
  test('actionRequested', ()=> {
    const payload: AuthPayload = {
      sendType:'TEST',
      login: 'test',
      email: 'test@test.ru',
      password: 'test'
    };
    expect(actionRequested(payload)).toEqual({
      type: AUTH_REQUESTED,
      payload 
    });
  });
  test('actionSucceed', ()=> {
    const payload: Auth = {
      user: {
        id: 1,
        login: 'test',
        email: 'test@test.ru',
        avatarPath: 'test',
        createdAt: new Date().toString(),
        updatedAt: new Date(),
        news: []
      },
      accessToken: 'rgregerg' 
    };

    expect(actionSucceed(payload)).toEqual({
      type: AUTH_SUCCEED,
      payload 
    });
  });
  test('actionFailed', ()=> {
    const error = 'error';
    expect(actionFailed(error)).toEqual({
      type: AUTH_FAILED,
      error
    });
  });
  test('actionVerify', ()=> {
    expect(actionVerify()).toEqual({ type: AUTH_VERIFY_REQUESTED });
  });
  test('actionSingOut', ()=> {
    expect(actionSingOut()).toEqual({ type: AUTH_SIGN_OUT });
  });
});
