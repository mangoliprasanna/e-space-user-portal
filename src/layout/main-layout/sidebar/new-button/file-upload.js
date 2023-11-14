import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function UploadButtonOption({ config, handleClose }) {

  return (
    <>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <UploadFileIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>File Upload</ListItemText>
      </MenuItem>
    </>
  )
}

export default UploadButtonOption