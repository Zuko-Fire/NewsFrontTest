import { type FC } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import * as locales from '../../locales/en.json';
import { RootState } from '../../redux/store';
import { AuthState, ShowModalAction } from '../../redux/types';
import { showModalAction } from '../../redux/actions/showModalAction/showModalAction';
import { ModalAuth } from '../ModalAuth';
import { MenuUser } from '../MenuUser';

import { BACKGROUND, FLEX_GROW, ICON_BUTTON } from './constants';
import './style.css';

export const Header: FC = () => {
  const navigate = useNavigate();
  const { authUser }: AuthState = useSelector((state: RootState) => state.auth);
  const { isModalOpen, modalType } = useSelector(
    (state: RootState) => state.showModal
  );
  const dispatchShow: Dispatch<ShowModalAction> = useDispatch();

  const toMainPage = () => {
    navigate('/');
  };

  const showModal = (modalType: string) => {
    dispatchShow(showModalAction({ isModalOpen: true, modalType }));
  };

  return (
    <div data-testid="test_header">
      <Box sx={FLEX_GROW} className="box-header">
        <AppBar position="static" className="box-header__app-bar" sx={BACKGROUND}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={ICON_BUTTON}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logo}
              className="box-header__news-logo"
              onClick={toMainPage}
            ></img>
            <Typography variant="h6" component="div" sx={FLEX_GROW}>
              {locales.TITLE}
            </Typography>
            {authUser ? (
              <>
                <MenuUser userName={authUser.login} />
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => showModal('SIGN IN')}>
                  {locales.SIGN_IN}
                </Button>
                <Button color="inherit" onClick={() => showModal('SIGN UP')}>
                  {locales.SIGN_UP}
                </Button>
              </>
            )}
            {isModalOpen && <ModalAuth textButton={modalType} />}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
  
};
