import React from 'react'
import { Button, ListItemText, MenuItem, Typography } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFileApiCall, deleteFolderApiCall, fileState } from '../../../redux/reducers/storage.reducer';
import ToastHelper from '../../../utils/toast.utils';
import { hideDialog, shodwDialog } from '../../../redux/reducers/dialog.reducer';
import Spinner from "../../spinner";


const DeleteForeverConfirmationDialog = ({ type, name, code, handleClose }) => {
  const dispatch = useDispatch();
  const error = `Unable to complete request!`;
  const { isLoading } = useSelector(fileState);

  const deleteForever = () => {
    const msg = `Item deleted!`;
    if (type) {
      ToastHelper.promise(
        dispatch(deleteFileApiCall(code)),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(deleteFolderApiCall(code)),
        msg,
        error
      );
    }
    handleClose();
  };

  if (isLoading === true) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <div>
        <Typography variant="body1" gutterBottom>
          "{name.replace("/", "")}" will be deleted forever and you won't be able to restore it.
        </Typography>
        <div style={{
          marginTop: "15px",
          float: 'right'
        }} >
          <Button
            onClick={deleteForever}
            variant="contained"
            color="secondary">Delete</Button>
        </div>
      </div>
    </>
  )
}

function DeleteForeverItem({ config, handleClose }) {
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(hideDialog());
  }

  const deleteConfirmation = () => {
    const dialogConfig = {
      open: true,
      title: 'Delete forever?',
      fullWidth: true,
      maxWidth: 'xs',
      content: (
        <DeleteForeverConfirmationDialog
          handleClose={closeDialog}
          type={config.type}
          name={config.name}
          code={config.code} />
      )
    };
    dispatch(shodwDialog(dialogConfig));
    handleClose();
  }

  return (
    <>
      <MenuItem onClick={deleteConfirmation}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete Forever</ListItemText>
      </MenuItem>
    </>
  )
}

export default DeleteForeverItem