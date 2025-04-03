import { all } from 'redux-saga/effects';

import watchNews from './newsSaga';
import watchAuth from './authSaga';
import watchWriteLS from './saveTokenSaga';
import watchVerify from './verifySaga';
import watchRemoveLS from './removeTokenSaga';
import watchUser from './userSaga';
import watchEditUser from './editUserSaga';

function* rootSaga() {
  yield all([
    watchNews(),
    watchAuth(),
    watchVerify(),
    watchWriteLS(),
    watchRemoveLS(),
    watchUser(),
    watchEditUser()
  ]);
}

export default rootSaga;
