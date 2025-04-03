import { useEffect, type FC } from 'react';
import {
  Button,
  CardMedia,
  Container,
  LinearProgress,
  Stack,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';

import * as locales from '../../locales/en.json';
import defaultAvatar from '../../assets/defaultAvatar.png';
import { AlertMessage, Header, NewsContainer } from '../../components';
import { RootState } from '../../redux/store';
import { AuthState, UserAction, UserState } from '../../redux/types';
import { actionUserRequested } from '../../redux/actions/userAction/userAction';
import { ModalChangeUser } from '../../components/ModalChangeUser/ModalChangeUser';

import './style.css';

const IMAGE_STYLE = { height: '180px', width: '180px' };

export const UserPage: FC = () => {
  const id: string | null = useParams()?.id ?? null;

  const dispatch: Dispatch<UserAction> = useDispatch();
  const { userNews, user, isLoading }: UserState = useSelector(
    (state: RootState) => state.user
  );
  const { authUser }: AuthState = useSelector((state: RootState)=> state.auth);
  const date = user != null ? user.createdAt : null;
  
  const authId: string = authUser?.id ?? '';
  useEffect(() => {
    if (id != null) dispatch(actionUserRequested(id));
  }, [id]);
  return (
    <>
      <Header />
      {user == null ? (
        isLoading ? (
          <LinearProgress />
        ) : (
          <AlertMessage message={locales.ERROR_MESSAGE} severity="error" />
        )
      ) : (
        <Container className="user-page">
          <Stack className="user-page__user-stack user-stack" spacing={1}>
            <Stack direction="row" maxHeight="100%">
              <CardMedia
                component="img"
                src={user.avatarPath ? user.avatarPath : defaultAvatar}
                style={IMAGE_STYLE}
              />
              <Stack margin="2% 0 0 2%">
                <Typography variant="h5" color="#fff">
                  {`${locales.LOGIN}:`}
                </Typography>
                <Typography variant="h5" color="#fff">
                  {`${locales.EMAIL}:`}
                </Typography>
              </Stack>
              <Stack margin="2% 0 0 2%">
                <Typography className="user-stack__text" color="#fff">
                  {user.login}
                </Typography>
                <Typography color="#fff">{user.email}</Typography>
                <Typography
                  variant="body2"
                  style={{ backgroundColor: '#313131', color: '#fff' }}
                >{`${locales.DATE_REGISTRATION}: ${date}`}</Typography>
                {authId === id &&  <ModalChangeUser />}
              </Stack>
            </Stack>
          </Stack>
          {authId === id && 
            <Button
              disabled={false}
              className="user-page__add-news-button"
              variant="contained"
            > 
              {locales.ADD_NEWS_BUTTON}
            </Button>
          }
          <NewsContainer news={userNews} author={user.login} />
        </Container>
      )}
    </>
  );
};
