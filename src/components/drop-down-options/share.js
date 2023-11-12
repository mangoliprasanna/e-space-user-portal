import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import ShareIcon from '@mui/icons-material/Share';

function ShareItem({ config, handleClose }) {

  return (
    <>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <ShareIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Share</ListItemText>
      </MenuItem>
    </>
  )
}

export default ShareItem