import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { prepareFilesForUpload } from '../../../utils/upload.utils';
import { getCurrentFolderCode } from '../../../redux/reducers/storage.reducer';
import { pushItemForUpload } from '../../../redux/reducers/uploader.reducer';

function UploadFileButton() {
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
      <label htmlFor="upload-btn" type="button" aria-label='upload-btn' className="btn btn-block btn-success upload-btn">
        <span className="buttonIcon">
          <i className="fa fa-upload" />
        </span>
        <span className="buttonTxt">
          Upload
          <input
            onChange={handleOnChange}
            type="file"
            id="upload-btn"
            multiple
          />
        </span>
      </label>
    </>
  )
}

export default UploadFileButton