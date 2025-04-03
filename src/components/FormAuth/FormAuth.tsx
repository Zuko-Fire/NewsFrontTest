import {
  type FC, useState, ChangeEvent, useEffect 
} from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Stack, TextField, Typography 
} from '@mui/material';

import { AuthAction, AuthPayload, AuthState } from '../../redux/types';
import { actionRequested } from '../../redux/actions/authActions/authActions';
import { RootState } from '../../redux/store';
import * as locales from '../../locales/en.json';

import { FormAuthProps } from './FormAuth.props';
import './style.css';
import { CHECK_EMAIL } from './constants';

const MIN_INPUT = 6;
const MAX_INPUT = 20;

export const FormAuth: FC<FormAuthProps> = ({ textButton }) => {
  const dispatch: Dispatch<AuthAction> = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState('');

  const { error }: AuthState = useSelector((state: RootState) => state.auth);

  const validate = (isLoginChange?: boolean) => {
    setInvalid('');

    if (password.length < MIN_INPUT || password.length > MAX_INPUT) setInvalid(locales.INVALID_PASSWORD);

    if (email.length < MIN_INPUT || !CHECK_EMAIL.test(email))
      setInvalid(locales.INVALID_EMAIL);

    if (isLoginChange) {
      if (login.length < MIN_INPUT || login.length > MAX_INPUT) setInvalid(locales.INVALID_LOGIN);
    }
  };
  const loginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);

  };
  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

  };
  const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

  };
  useEffect(() => {
    if (email != '' || password != '') validate();
  }, [email, password]);

  useEffect(()=> {
    if (login != '') validate(true);
  },[login]);
  const sendForm = () => {
    if (textButton === 'SIGN UP') validate(true);
    if (invalid === '') {
      const payload: AuthPayload = {
        login,
        password,
        email,
        sendType: textButton
      };
      dispatch(actionRequested(payload));
    }
  };

  return (
    <Stack className="auth-form">
      <TextField
        id="email"
        label={locales.EMAIL}
        variant="outlined"
        onChange={emailChange}
        style={{ margin:'10px' }}
      />
      {textButton === 'SIGN UP' && (
        <TextField
          id="login"
          label={locales.LOGIN}
          variant="outlined"
          onChange={loginChange}
          style={{ margin:'10px' }}
        />
      )}
      <TextField
        id="password"
        label={locales.PASSWORD}
        type="password"
        onChange={passwordChange}
        style={{ margin:'10px' }}
      />
      {error && (
        <Typography gutterBottom variant="caption" component="div" color="red">
          {`${locales.AUTH_ERROR}: ${error}`}
        </Typography>
      )}
      {invalid && (
        <Typography gutterBottom variant="caption" component="div" color="red">
          {invalid}
        </Typography>
      )}
      <Button variant="contained" onClick={() => sendForm()}>
        {textButton}
      </Button>
    </Stack>
  );
};
