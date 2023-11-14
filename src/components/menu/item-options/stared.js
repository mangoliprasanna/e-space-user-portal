import React from 'react'
import { useDispatch } from 'react-redux';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { updateFileApiCall, updateFolderApiCall } from '../../../redux/reducers/storage.reducer';
import ToastHelper from '../../../utils/toast.utils';


function StarItem({ config, handleClose }) {
  const dispatch = useDispatch();
  const onClick = () => {
    const msg = `${config.isStared ? 'Removed from' : "Added to"} Starred`;
    const error = `Unable to complete request!`;
    if (config.type) {
      ToastHelper.promise(
        dispatch(updateFileApiCall(config.code, { isStared: !config.isStared }, config)),
        msg,
        error
      );
    } else {
      ToastHelper.promise(
        dispatch(updateFolderApiCall(config.code, { isStared: !config.isStared }, config)),
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
          {config.isStared ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
        </ListItemIcon>
        <ListItemText>{config.isStared ? 'Remove Starred' : 'Add Starred'}</ListItemText>
      </MenuItem>
    </>
  )
}

export default StarItem