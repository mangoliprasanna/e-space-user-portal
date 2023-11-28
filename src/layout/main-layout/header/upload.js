import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFolderCode } from '../../../redux/reducers/storage.reducer';
import { prepareFilesForUpload } from '../../../utils/upload.utils';
import { pushItemForUpload } from '../../../redux/reducers/uploader.reducer';

function UploadButton({ config, handleClose }) {

  const dispatch = useDispatch();
  const code = useSelector(getCurrentFolderCode);

  const handleOnChange = (e) => {
    const files = e.target.files;
    const processedFiles = prepareFilesForUpload(files, code);
    dispatch(pushItemForUpload(processedFiles));
    e.target.value = null;
  };

  return (
    <>
      <Box component="span" sx={{ paddingLeft: '25px', display: { xs: 'none', md: 'block' } }}>
        <Button variant="outlined" color="secondary" startIcon={<AddIcon />} >
          New
          <input
            onChange={handleOnChange}
            type="file"
            id="upload-btn"
            multiple
          />
        </Button>
      </Box>
    </>
  )
}

export default UploadButton