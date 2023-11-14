import React from 'react'
import { Divider, Menu, Paper, Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import NewFolderOption from './new-folder'

import UploadButtonOption from './file-upload'

function NewButtonOptionWithMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Box sx={{ ml: 2, mr: 2, mb: 2 }}>
        <Button
          id="new-button"
          onClick={handleClick}
          size="large"
          sx={{ borderRadius: 5 }}
          fullWidth
          startIcon={<AddIcon />}
          variant="contained"
          aria-controls={open ? 'new-button-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          color="secondary">
          New
        </Button>
      </Box>
      <Menu
        id="new-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{
          'aria-labelledby': 'new-button-menu',
        }}
      >
        <Paper sx={{ width: 220, maxWidth: '100%' }}>
          <NewFolderOption handleClose={handleClose} />
          <Divider />
          <UploadButtonOption handleClose={handleClose} />
        </Paper>

      </Menu>
    </>
  )
}

export default NewButtonOptionWithMenu