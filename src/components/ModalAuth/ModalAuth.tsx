import { type FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { FormAuth } from '../FormAuth';
import { showModalAction } from '../../redux/actions/showModalAction/showModalAction';
import { RootState } from '../../redux/store';
import { ShowModalAction } from '../../redux/types';

import { ModalAuthProps } from './ModalAuth.props';

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

export const ModalAuth: FC<ModalAuthProps> = ({ textButton }) => {
  const dispatch: Dispatch<ShowModalAction> = useDispatch();
  const { isModalOpen } = useSelector((state: RootState) => state.showModal);
  const handleClose = () => {
    dispatch(showModalAction({ isModalOpen: false, modalType: textButton }));
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormAuth textButton={textButton}></FormAuth>
        </Box>
      </Modal>
    </div>
  );
};
