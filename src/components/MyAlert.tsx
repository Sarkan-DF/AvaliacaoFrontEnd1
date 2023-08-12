import { Alert, Snackbar } from '@mui/material';
import React from 'react';

interface MyAlertProps {
  open: boolean;
  handleClose: () => void;
  message: string;
  type: 'success' | 'info' | 'error' | 'warning';
}

export const MyAlert = (props: MyAlertProps) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={4000}
      onClose={props.handleClose}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <Alert severity={props.type}>{props.message}</Alert>
    </Snackbar>
  );
};
