import { NEWS_FAILED, NEWS_RECEIVED, NEWS_REQUESTED } from '../constants';
import { NewsAction, NewsState } from '../types';

export const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: null
};

const newsReducer = (state = initialState, action: NewsAction) => {
  switch (action.type) {
    case NEWS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case NEWS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        news: action.payload,
        error: null
      };
    case NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        news: [],
        error: action.error
      };
    default:
      return state;
  }
};
export default newsReducer;
