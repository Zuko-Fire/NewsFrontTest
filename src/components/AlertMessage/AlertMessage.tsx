import { type FC } from 'react';
import { Alert } from '@mui/material';

import { AlertMessageProps } from './AlertMessage.props.ts';

export const AlertMessage: FC<AlertMessageProps> = ({ message, severity }) => {
  return <Alert severity={severity}>{message}</Alert>;
};
