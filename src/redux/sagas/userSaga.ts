import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { USER_REQUESTED } from '../constants';
import {
  actionUserFailed,
  actionUserReceived
} from '../actions/userAction/userAction';
import { getUser } from '../api/getUser';
import { UserAction } from '../types';

function* workerUser({ id }: UserAction) {
  try {
    const { data } = yield call(getUser, id);
    yield put(actionUserReceived(data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) yield put(actionUserFailed(error.message));
  }
}

function* watchUser() {
  yield takeLatest(USER_REQUESTED, workerUser);
}

export default watchUser;
