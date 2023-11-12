import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import RestoreIcon from '@mui/icons-material/Restore';
import { useDispatch } from 'react-redux';
import ToastHelper from '../../utils/toast.utils';
import { updateFileApiCall, updateFolderApiCall } from '../../redux/reducers/storage.reducer';

function RestoreItem({ config, handleClose }) {
  const dispatch = useDispatch();
  const onClick = () => {
    const msg = `Item restored!!`;
    const error = `Unable to complete request!`;
    if (config.type) {
      ToastHelper.promise(
        dispatch(updateFileApiCall(config.code, { isTrash: false }, config)),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(updateFolderApiCall(config.code, { isTrash: false }, config)),
        msg,
        error
      );
    }
    handleClose();
  };
  return (
    <>
      <MenuItem onClick={onClick}>
        <ListItemIcon>
          <RestoreIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Restore</ListItemText>
      </MenuItem>
    </>
  )
}

export default RestoreItem