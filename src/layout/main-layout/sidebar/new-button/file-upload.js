import React from 'react'
import { ListItemText, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFolderCode } from '../../../../redux/reducers/storage.reducer';
import { prepareFilesForUpload } from '../../../../utils/upload.utils';
import { pushItemForUpload } from '../../../../redux/reducers/uploader.reducer';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function UploadButtonOption({ config, handleClose }) {

  const dispatch = useDispatch();

  const code = useSelector(getCurrentFolderCode);

  const handleOnChange = (e) => {
    console.log(e, "data");
    const { files } = e.target;
    const processedFiles = prepareFilesForUpload(files, code);
    dispatch(pushItemForUpload(processedFiles));
    e.target.value = null;
    handleClose();
  };

  return (
    <>
      <MenuItem component="label" >
        <ListItemIcon>
          <UploadFileIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText >
          File Upload
          <VisuallyHiddenInput onChange={handleOnChange} multiple type="file" />
        </ListItemText>
      </MenuItem>
    </>
  )
}

export default UploadButtonOption