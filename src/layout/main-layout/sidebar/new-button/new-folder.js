import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

function NewFolderOption({ config, handleClose }) {

  return (
    <>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <CreateNewFolderIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>New Folder</ListItemText>
      </MenuItem>
    </>
  )
}

export default NewFolderOption