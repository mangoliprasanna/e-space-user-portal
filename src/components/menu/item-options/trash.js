import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { updateFileApiCall, updateFolderApiCall } from '../../../redux/reducers/storage.reducer';
import ToastHelper from '../../../utils/toast.utils';

function TrashItem({ config, handleClose }) {
  const dispatch = useDispatch();
  const error = `Unable to complete request!`;
  const moveToTrash = () => {
    const msg = `Moved to trash!`;
    if (config.type) {
      ToastHelper.promise(
        dispatch(updateFileApiCall(config.code, { isTrash: true }, config)),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(updateFolderApiCall(config.code, { isTrash: true }, config)),
        msg,
        error
      );
    }
    handleClose();
  };

  return (
    <>
      <MenuItem onClick={moveToTrash}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Move to trash</ListItemText>
      </MenuItem>
    </>
  )
}

export default TrashItem