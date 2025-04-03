import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { actionSucceed } from '../actions/authActions/authActions';
import { AUTH_VERIFY_REQUESTED } from '../constants';
import { verify } from '../api/verify';
import { Auth } from '../types';

function* workerVerify() {
  try {
    const { data } = yield call(verify);
    const auth: Auth = { user: { ...data } };
    yield put(actionSucceed(auth));
  } catch (error: unknown) {
    if (error instanceof AxiosError) console.log(error);
  }
}
function* watchVerify() {
  yield takeLatest(AUTH_VERIFY_REQUESTED, workerVerify);
}

export default watchVerify;
