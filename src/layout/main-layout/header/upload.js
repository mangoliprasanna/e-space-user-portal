import React from 'react';
import { Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box } from '@mui/system';

function UploadButton({ config, handleClose }) {

  return (
    <>
      <Box component="span" sx={{ paddingLeft: '25px', display: { xs: 'none', md: 'block' } }}>
        <Button variant="outlined" color="secondary" startIcon={<UploadFileIcon />}>
          Upload File
        </Button>
      </Box>
    </>
  )
}

export default UploadButton