import {
  Stack,
  Paper,
  MenuList,
  MenuItem,
  Button,
  Popper,
  Grow,
  ClickAwayListener
} from '@mui/material';
import {
  useState,
  useRef,
  SyntheticEvent,
  useEffect,
  type FC,
  Dispatch
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actionSingOut } from '../../redux/actions/authActions/authActions';
import { AuthAction, AuthState } from '../../redux/types';
import { RootState } from '../../redux/store';

import { MenuUserProps } from './MenuUser.props';

export const MenuUser: FC<MenuUserProps> = ({ userName }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const dispatch: Dispatch<AuthAction> = useDispatch();
  const { authUser }: AuthState = useSelector((state: RootState) => state.auth);
  const id = authUser.id;
  const navigate = useNavigate();
  const prevOpen = useRef(open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const singOut = (event: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
    dispatch(actionSingOut());
    navigate('/');
  };

  const toUser = () => {
    navigate(`/users/${id}`);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {userName}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem onClick={toUser}>Profile</MenuItem>
                    <MenuItem onClick={singOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};
