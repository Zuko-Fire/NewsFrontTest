import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import reducer from './reducers/rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnchanters =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMIddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeEnchanters(applyMiddleware(sagaMIddleware))
);

export type RootState = ReturnType<typeof store.getState>;
sagaMIddleware.run(rootSaga);
