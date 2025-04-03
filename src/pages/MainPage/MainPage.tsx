import { type FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';

import { NewsContainer, AlertMessage, Header } from '../../components';
import { actionRequested } from '../../redux/actions/newsActions/newsActions';
import * as locales from '../../locales/en.json';
import { RootState } from '../../redux/store';
import { NewsAction, NewsState } from '../../redux/types';

export const MainPage: FC = () => {
  const dispatch: Dispatch<NewsAction> = useDispatch();
  const { news, isLoading, error }: NewsState = useSelector(
    (state: RootState) => state.news
  );

  useEffect(() => {
    dispatch(actionRequested());
  }, []);
  return (
    <>
      <Header />
      <>
        {news.length > 0 && <NewsContainer news={news} />}
        {isLoading && <LinearProgress />}
        {!isLoading && news.length == null && (
          <AlertMessage message={locales.INFO_MESSAGE} severity="info" />
        )}
        {!isLoading && error && (
          <AlertMessage message={locales.ERROR_MESSAGE} severity="error" />
        )}
      </>
    </>
  );
};
