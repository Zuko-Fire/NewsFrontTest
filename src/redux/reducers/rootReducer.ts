import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import showModalReducer from './showModalReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  showModal: showModalReducer,
  auth: authReducer,
  user: userReducer
});

export default rootReducer;
