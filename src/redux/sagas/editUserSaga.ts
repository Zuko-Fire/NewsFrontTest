import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { EDIT_USER_REQUESTED } from '../constants';
import { EditUserAction } from '../types';
import { editUser } from '../api/editUser';
import {
  actionEditUserFailed,
  actionEditUserSucceed
} from '../actions/editUserActions/editUserAction';

function* workerEditUser({ payload }: EditUserAction) {
  try {
    const { data } = yield call(editUser, payload);
    yield put(actionEditUserSucceed(data));
  } catch (error: unknown) {
    if (error instanceof AxiosError)
      yield put(actionEditUserFailed(error.response?.data.message));
  }
}

function* watchEditUser() {
  yield takeLatest(EDIT_USER_REQUESTED, workerEditUser);
}

export default watchEditUser;
