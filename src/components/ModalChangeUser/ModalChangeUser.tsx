import {
  useState, type FC, ChangeEvent, useEffect 
} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  Stack, TextField, Button, Typography 
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';

import * as locales from '../../locales/en.json';
import { actionEditUserRequested } from '../../redux/actions/editUserActions/editUserAction';
import { EditUser, EditUserAction, UserState } from '../../redux/types';
import { RootState } from '../../redux/store';

const MIN_INPUT = 6;
const MAX_INPUT = 20;
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export const ModalChangeUser: FC = () => {
  const { user, error }: UserState = useSelector(
    (state: RootState) => state.user
  );
  const id: string | null = useParams()?.id ?? null;
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(user?.login ?? '');
  const [invalid, setInvalid] = useState('');

  const dispatch: Dispatch<EditUserAction> = useDispatch();
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => setIsOpen(true);
  const validate = () => {
    setInvalid('');
    if (login.length < MIN_INPUT || login.length > MAX_INPUT) setInvalid(locales.INVALID_LOGIN);
  };
  const changeLogin = (event: ChangeEvent<HTMLInputElement>) =>
    setLogin(event.target.value);

  const sendForm = () => {
    if (invalid === '' && id != null) {
      const userData: EditUser = {};
      userData.login = login;
      dispatch(actionEditUserRequested({ id, userData }));
    }
  };

  useEffect(() => {
    validate();
  }, [login]);

  useEffect(() => {
    if (user != null) {
      setIsOpen(false);
    }
  }, [user]);

  return (
    <div>
      <Button onClick={handleOpen}>{locales.EDIT_USER_BUTTON}</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack className="auth-form">
            <Typography variant="h5">{locales.EDIT_USER_BUTTON}</Typography>

            <TextField onChange={changeLogin} defaultValue={login} />
            <Button variant="contained" onClick={() => sendForm()}>
              {locales.UPDATE_LOGIN}
            </Button>
            {invalid && (
              <Typography
                gutterBottom
                variant="caption"
                component="div"
                color="red"
              >
                {invalid}
              </Typography>
            )}
            {error && (
              <Typography
                gutterBottom
                variant="caption"
                component="div"
                color="red"
              >
                {`server: ${error}`}
              </Typography>
            )}
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
