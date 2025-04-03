import { News } from '../../types';
import { NEWS_FAILED, NEWS_RECEIVED, NEWS_REQUESTED } from '../../constants';

const actionFailed = (error: string) => ({
  type: NEWS_FAILED,
  error
});

const actionReceived = (payload: News[]) => ({
  type: NEWS_RECEIVED,
  payload
});

const actionRequested = () => ({ type: NEWS_REQUESTED });

export { actionFailed, actionReceived, actionRequested };
