import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { fetchNews } from '../api/fetchNews';
import {
  actionFailed,
  actionReceived
} from '../actions/newsActions/newsActions';
import { NEWS_REQUESTED } from '../constants';

function* workerNews() {
  try {
    const { data } = yield call(fetchNews);
    yield put(actionReceived(data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) yield put(actionFailed(error.message));
  }
}

function* watchNews() {
  yield takeLatest(NEWS_REQUESTED, workerNews);
}

export default watchNews;
