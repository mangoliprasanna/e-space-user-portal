import * as Yup from 'yup';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react'
import Spinner from '../../components/spinner'
import './style.css'

import { 
  createFolderApiCall,
  folderState,
  getCurrentFolderCode 
} from '../../redux/reducers/storage.reducer';


const NewFolderForm = ({ closeModel }) => {

  const dispatch = useDispatch();
  const currentFolderCode = useSelector(getCurrentFolderCode);

  const createNewFolder = ({ folderName }) => {
    dispatch(createFolderApiCall(folderName, currentFolderCode))
      .then(() => closeModel());
  }

  const formik = useFormik({
    initialValues: {
      folderName: '',
    },
    validationSchema: Yup.object({
      folderName: Yup.string()
        .required("Enter folder name")
        .matches(/^([a-zA-Z0-9][^*/><?|:]*)$/, "Invalid Folder Name"),
    }),
    onSubmit: createNewFolder,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>

          <div
            className={`form-group has-feedback ${formik.errors.folderName ? 'has-error' : null}`}
          >
            <input
              type="text"
              placeholder='Folder Name'
              className="form-control"
              autoComplete={false}
              {...formik.getFieldProps('folderName')}
            />
            {formik.errors.folderName ? <span className="help-block">{formik.errors.folderName}</span> : null}
          </div>

        </div>
        <br />
        <div>
          <button type="button" onClick={closeModel} className="btn btn-default">Close</button>
          <button
            type="submit"
            className="btn btn-primary pull-right">Create</button>
        </div>
      </form>
    </>
  )
}

NewFolderForm.propTypes = {
  closeModel: PropTypes.func,
};

function NewFolderButton() {

  const { isLoading } = useSelector(folderState);
  const [showModel, setShowModel] = useState(false);
  const closeModel = () => {
    setShowModel(false);
  };
  const openModel = () => {
    setShowModel(true);
  };

  return (
    <>
      <div>
        <button onClick={openModel} type="button" className="btn btn-block btn-primary">
          <span className="buttonIcon">
            <i className="fa fa-plus" />
          </span>
          <span className="buttonTxt">
            New Folder
          </span>
        </button>
        <div className="modal" style={{ display: showModel ? 'block' : 'none' }}>
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-body">
                <h4 className="modal-title">New Folder</h4>
                <br />
                {isLoading === true ? <Spinner /> : <NewFolderForm closeModel={closeModel} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewFolderButton