import { USER_RECEIVED } from '../constants';
import {
  News, NewsAction, Tag, User, UserAction 
} from '../types';

import userReducer, { initialState } from './userReducer';

describe('userReducer', ()=> {

  const user: User = {
    avatarPath: '/где-то/тут.то',
    createdAt: new Date().toString(),
    email: 'бабака@ковчег.рф',
    id: 1,
    login: 'БабакаСобака',
    updatedAt: new Date(),
    news: [] as News[]
  };
  const news:News[]  = [{
    id: 1,
    header: 'Очень важная новость',
    userId: 1,
    imagePath: '/где-то/тут.то',
    text: 'Важнейшее содержание',
    createdAt: new Date(),
    updatedAt: new Date(),
    user: user,
    tags: [] as Tag[]
  }];
  it('Default state', ()=> {
    expect (userReducer(undefined,{}as any)).toEqual(initialState);
  });

  it('USER_REQUESTED', ()=> {
    const action: UserAction = { type: 'USER_REQUESTED' };
    expect(action).toEqual({ type: 'USER_REQUESTED' });
  });
  it('USER_RECEIVED', ()=> {
    const action: UserAction = {
      type: USER_RECEIVED,
      isLoading: false,
      user: user,
      userNews: news,
      error: null
    };
    expect(action).toEqual({
      type: 'USER_RECEIVED',  isLoading: false,
      user: user,
      userNews: news,
      error: null 
    });
  });
});
