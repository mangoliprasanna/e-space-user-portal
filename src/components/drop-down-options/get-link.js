import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

function GetLinkOption({ config, handleClose }) {

  return (
    <>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <InsertLinkIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Copy Link</ListItemText>
      </MenuItem>
    </>
  )
}

export default GetLinkOption