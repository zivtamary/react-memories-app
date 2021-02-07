import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteModal({ showModal, onClose, onDelete }) {
  return (
    <div>
      <Dialog
        open={showModal}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure you want to delete the post?'}
        </DialogTitle>
        <DialogActions style={{ justifyContent: 'space-around' }}>
          <Button onClick={onClose} color='primary'>
            Disagree
          </Button>
          <Button onClick={onDelete} color='primary' autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
