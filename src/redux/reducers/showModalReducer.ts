import { AUTH_SUCCEED, SHOW_MODAL } from '../constants';
import { ShowModalAction, ShowModalState } from '../types';

export const initialState: ShowModalState = {
  isModalOpen: false,
  modalType: 'SING UP'
};

const showModalReducer = (state = initialState, action: ShowModalAction) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModalOpen: action.payload.isModalOpen,
        modalType: action.payload.modalType
      };
    case AUTH_SUCCEED:
      return {
        ...state,
        isModalOpen: false
      };
    default:
      return state;
  }
};
export default showModalReducer;
