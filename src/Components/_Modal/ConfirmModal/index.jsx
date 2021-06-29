import React from 'react';
import { Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

const ConfirmModal = ({ isOpen, handleClose, title, btn_confirm, btn_close, callback }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        {btn_confirm && <Button size='small' variant="contained" color="secondary" onClick={callback}>
          {btn_confirm}
        </Button>}
        <Button size='small' variant="contained" onClick={handleClose}>
          {btn_close}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
