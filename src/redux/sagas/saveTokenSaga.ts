import { takeLatest, call, put } from 'redux-saga/effects';

import { actionFailed } from '../actions/authActions/authActions';
import { AUTH_SUCCEED } from '../constants';
import { writeTokenFromLS } from '../../lib/local-storage';
import { AuthAction } from '../types';

function* workerWriteLS(action: AuthAction) {
  try {
    if (action.payload != null && 'accessToken' in action.payload) {
      if (action.payload.accessToken != null) {
        const token: string = action.payload.accessToken;
        yield call(writeTokenFromLS, token);
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) yield put(actionFailed(error.message));
  }
}
function* watchWriteLS() {
  yield takeLatest(AUTH_SUCCEED, workerWriteLS);
}

export default watchWriteLS;
