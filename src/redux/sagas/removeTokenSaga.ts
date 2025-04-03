import { takeLatest, call, put } from 'redux-saga/effects';

import { actionFailed } from '../actions/authActions/authActions';
import { AUTH_SIGN_OUT } from '../constants';
import { removeTokenFromLS } from '../../lib/local-storage';

function* workerRemoveLS() {
  try {
    yield call(removeTokenFromLS);
  } catch (error: unknown) {
    if (error instanceof Error) yield put(actionFailed(error.message));
  }
}
function* watchRemoveLS() {
  yield takeLatest(AUTH_SIGN_OUT, workerRemoveLS);
}

export default watchRemoveLS;
