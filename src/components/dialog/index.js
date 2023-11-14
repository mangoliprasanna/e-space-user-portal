import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export default function GlobalDialog() {

  const {
    open, title, contentText, content, action, fullWidth, maxWidth,
  } = useSelector((state) => state.dialog);
  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
      >
        <DialogTitle>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          {contentText ? <DialogContentText>
            {contentText}
          </DialogContentText> : <></>}
          {content}
        </DialogContent>
        <DialogActions>
          {action}
        </DialogActions>
      </Dialog>
    </>
  )
}