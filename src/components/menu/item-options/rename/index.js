import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useDispatch } from 'react-redux';
import { hideDialog, shodwDialog } from '../../../../redux/reducers/dialog.reducer';
import RenameFileForm from './file.rename';

function RenameItem({ config, handleClose }) {
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(hideDialog());
  }

  const openDialog = () => {
    const dialogConfig = {
      open: true,
      title: 'Rename',
      fullWidth: true,
      maxWidth: 'sm',

    };
    if (config.type) {
      dialogConfig.content = (
        <RenameFileForm closeDialog={closeDialog} name={config.name} code={config.code} />
      );
      dispatch(shodwDialog(dialogConfig));
    }

    handleClose();
  }

  return (
    <>
      <MenuItem onClick={openDialog}>
        <ListItemIcon>
          <DriveFileRenameOutlineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Rename</ListItemText>
      </MenuItem>
    </>
  )
}

export default RenameItem