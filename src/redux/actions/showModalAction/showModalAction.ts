import { SHOW_MODAL } from '../../constants';
import { ShowModalState } from '../../types';

export const showModalAction = (payload: ShowModalState) => ({
  type: SHOW_MODAL,
  payload
});
