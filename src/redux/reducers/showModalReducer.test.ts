import { AUTH_SUCCEED, SHOW_MODAL } from '../constants';
import { ShowModalAction } from '../types';

import showModalReducer, { initialState } from './showModalReducer';

describe('showModalReducer', ()=> {
  it('Default state', ()=> {
    expect (showModalReducer(undefined,{}as any)).toEqual(initialState);
  });
  it('SHOW_MODAL', ()=> {
    const action: ShowModalAction = {
      type: SHOW_MODAL,
      payload: {
        isModalOpen: true,
        modalType: 'SING UP'
      }
    };
    expect(action).toEqual({
      payload:{ 
        isModalOpen: true,
        modalType: 'SING UP'
      },
      type:'SHOW_MODAL' 
    });
  });
  it('AUTH_SUCCEED', ()=> {
    const action: ShowModalAction = {
      type: AUTH_SUCCEED,
      payload: {
        isModalOpen: false,
        modalType: 'SING UP'
      }
    };
    expect(action).toEqual({
      type: AUTH_SUCCEED,
      payload: {
        isModalOpen: false,
        modalType: 'SING UP'
      }
    });
  });
});
