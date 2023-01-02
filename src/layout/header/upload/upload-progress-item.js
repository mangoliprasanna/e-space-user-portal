import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { uploadFileToContainer } from '../../../redux/reducers/uploader.reducer';

function UploadProgressItem({ id, config }) {
  const { progress = 0, isUploading, file, isProcessing, hasError } = config;
  const dispatch = useDispatch();
  useEffect(() => {
    const uploadElement = () => {
      dispatch(uploadFileToContainer(id, config));
    };
    if (config.isUploading === true) uploadElement();
  }, []);

  return (
    <>
      <li>
        <a href="#">
          <h3>
            <div className='row'>
              <div className='col-xs-10 upload-item'>
                <b>
                  {file.name}
                </b>
              </div>
              <div className='col-xs-1'>
                <small>
                  {isProcessing === true ? 'Processing..' : `${progress}%`}
                </small>
              </div>
            </div>
          </h3>
          <div className="progress xs">
            <div className={`progress-bar progress-bar-${isUploading === true ? 'aqua' : 'success'}`} style={{ width: `${progress}%` }}>
              <span className="sr-only">{progress} Complete</span>
            </div>
          </div>
        </a>
      </li>
    </>
  )
}

export default UploadProgressItem