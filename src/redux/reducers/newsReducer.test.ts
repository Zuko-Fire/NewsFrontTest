import { NEWS_FAILED, NEWS_RECEIVED, NEWS_REQUESTED } from '../constants';
import {
  News, NewsAction, Tag, User 
} from '../types';

import newsReducer, { initialState } from './newsReducer';

describe('newsReducer', () => {
  it('Возвращает initialState по умолчанию', () => {
    expect(newsReducer(undefined, {}as any)).toEqual(initialState);
  });
  it('запрос новостей NEWS_REQUESTED', ()=> {
    const state = initialState;
    const action = { type: NEWS_REQUESTED };
    expect(newsReducer(state,action)).toEqual({ ...initialState, isLoading: true });
  });
  it('Новости приняты NEWS_RECEIVED', ()=> {
    const user: User = {
      avatarPath: '/где-то/тут.то',
      createdAt: new Date().toString(),
      email: 'бабака@ковчег.рф',
      id: 1,
      login: 'БабакаСобака',
      updatedAt: new Date(),
      news: [] as News[]
    };
    const payload:NewsAction['payload']  = [{
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
    const action = { type: NEWS_RECEIVED, payload  };
    expect(newsReducer(initialState, action)).toEqual({ error: null, isLoading: false, news:payload });
  });
  it('произошла ошибка NEWS_FAILED', ()=>{
    const action = { type: NEWS_FAILED, error: 'ОЙ! что то пошло не так' };
    expect(newsReducer(initialState, action)).toEqual({ isLoading: false, error: action.error, news: [] });
  } );
});
