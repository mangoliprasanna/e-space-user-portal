import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { hideDialog } from '../../redux/reducers/dialog.reducer';

export default function GlobalDialog() {
  const dispatch = useDispatch();
  const {
    open, title, contentText, content, fullWidth, maxWidth,
  } = useSelector((state) => state.dialog);
  const handleClose = () => {
    dispatch(hideDialog());
  }
  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
      >
        <DialogTitle>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {contentText ? <DialogContentText>
            {contentText}
          </DialogContentText> : <></>}
          {content}
        </DialogContent>
      
      </Dialog>
    </>
  )
}