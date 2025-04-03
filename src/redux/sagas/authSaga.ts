import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { loginAuth } from '../api/loginAuth';
import { AuthAction, AuthPayload } from '../types';
import { register } from '../api/register';
import {
  actionFailed,
  actionSucceed
} from '../actions/authActions/authActions';
import { AUTH_REQUESTED } from '../constants';

function* workerAuth(action: AuthAction) {
  try {
    const { email, password, sendType, login } = action.payload as AuthPayload;
    if (sendType === 'SIGN IN') {
      const { data } = yield call(loginAuth, { email, password });
      yield put(actionSucceed(data));
    } else {
      const { data } = yield call(register, { email, password, login });
      yield put(actionSucceed(data));
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError)
      yield put(actionFailed(error.response?.data.message));
  }
}
function* watchAuth() {
  yield takeLatest(AUTH_REQUESTED, workerAuth);
}

export default watchAuth;
