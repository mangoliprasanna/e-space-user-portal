import React from 'react';
import { Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { hideDialog, shodwDialog } from '../../../redux/reducers/dialog.reducer';

function UploadButton({ config, handleClose }) {

  const dispatch = useDispatch();

  const onClose = () => {
    console.log("dialog closed!!");
  }


  const openDialog = () => {
    const dialogConfig = {
      open: true,
      title: 'Dialog Title',
      contentText: 'I am content' ,
      content: (
        <>
          <div>I am html contyent of the dialog</div>
        </>
      ),
      action: (
        <>
          <button type='button' onClick={() => {
            dispatch(hideDialog());
          }} >
            Close
          </button>
        </>
      ),
      onClose
    }
    dispatch(shodwDialog(dialogConfig));
  }

  return (
    <>
      <Box component="span" sx={{ paddingLeft: '25px', display: { xs: 'none', md: 'block' } }}>
        <Button variant="outlined" color="secondary" startIcon={<UploadFileIcon />} onClick={openDialog} >
          Upload File
        </Button>
      </Box>
    </>
  )
}

export default UploadButton