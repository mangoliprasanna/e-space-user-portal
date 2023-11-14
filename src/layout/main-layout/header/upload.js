import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { hideDialog, shodwDialog } from '../../../redux/reducers/dialog.reducer';

function UploadButton({ config, handleClose }) {

  const openDialog = () => {

  }

  return (
    <>
      <Box component="span" sx={{ paddingLeft: '25px', display: { xs: 'none', md: 'block' } }}>
        <Button variant="outlined" color="secondary" startIcon={<AddIcon />} onClick={openDialog} >
          New
        </Button>
      </Box>
    </>
  )
}

export default UploadButton