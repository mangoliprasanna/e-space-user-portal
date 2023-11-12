import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

function RenameItem({ config, handleClose }) {

  return (
    <>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <DriveFileRenameOutlineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Rename</ListItemText>
      </MenuItem>
    </>
  )
}

export default RenameItem