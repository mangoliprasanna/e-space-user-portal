import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fileState, folderState, renameFileApiCall, renameFolderApiCall } from '../../redux/reducers/storage.reducer';
import Spinner from '../spinner';
import { hideModal, showModal } from '../../redux/reducers/modal.reducer';

const RenemFolderForm = ({ closeModel, code, name }) => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector(folderState);

  const renameFolder = ({ folderName }) => {
    dispatch(renameFolderApiCall(code, folderName))
      .then(() => closeModel())
  }

  const formik = useFormik({
    initialValues: {
      folderName: name,
    },
    validationSchema: Yup.object({
      folderName: Yup.string()
        .required("Enter folder name")
        .matches(/^([a-zA-Z0-9][^*/><?|:]*)$/, "Invalid Folder Name"),
    }),
    onSubmit: renameFolder,
  });

  if (isLoading === true) {
    return (
      <Spinner />
    );
  }

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
              disabled={isLoading}
              className="form-control"
              autoComplete={false}
              autoFocus
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
            disabled={isLoading}
            className="btn btn-primary pull-right">Rename</button>
        </div>
      </form>
    </>
  )
}

const RenameFileForm = ({ closeModel, code, name }) => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector(fileState);

  const renameFile = ({ fileName }) => {
    dispatch(renameFileApiCall(code, fileName))
      .then(() => closeModel());
  }

  const formik = useFormik({
    initialValues: {
      fileName: name,
    },
    validationSchema: Yup.object({
      fileName: Yup.string()
        .required("Enter file name")
        .matches(/^(?!\.)(?!com[0-9]$)(?!con$)(?!lpt[0-9]$)(?!nul$)(?!prn$)[^|*?:<>/$"]*[^.|*?:<>/$"]+$/, "Invalid File Name"),
    }),
    onSubmit: renameFile,
  });

  if (isLoading === true) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>

          <div
            className={`form-group has-feedback ${formik.errors.fileName ? 'has-error' : null}`}
          >
            <input
              type="text"
              placeholder='File Name'
              className="form-control"
              autoComplete={false}
              {...formik.getFieldProps('fileName')}
            />
            {formik.errors.fileName ? <span className="help-block">{formik.errors.fileName}</span> : null}
          </div>

        </div>
        <br />
        <div>
          <button type="button" onClick={closeModel} className="btn btn-default">Close</button>
          <button
            type="submit"
            className="btn btn-primary pull-right">Rename</button>
        </div>
      </form>
    </>
  )
}

RenemFolderForm.propTypes = {
  closeModel: PropTypes.func,
  code: PropTypes.string,
  name: PropTypes.string,
};

RenameFileForm.propTypes = {
  closeModel: PropTypes.func,
  code: PropTypes.string,
  name: PropTypes.string,
};


function RenameItem({ closeMenu, config }) {
  const dispatch = useDispatch();
  const closeModel = () => {
    dispatch(hideModal());
  };

  const openFolderRenameModel = () => {
    dispatch(showModal({
      title: 'Rename Folder',
      size: 'modal-sm',
      child: (
        <RenemFolderForm
          name={config.name}
          code={config.code}
          closeModel={closeModel} />
      )
    }))
  };

  const openFileRenameModel = () => {
    dispatch(showModal({
      title: 'Rename File',
      size: 'modal-sm',
      child: (
        <RenameFileForm
          name={config.name}
          code={config.code}
          closeModel={closeModel} />
      )
    }))
  };

  const openModel = () => {
    if (config.type) {
      openFileRenameModel();
    } else {
      openFolderRenameModel();
    }
  };

  return (
    <>
      <li>
        <div onClick={openModel}>
          <i className="fa fa-pencil" />
          Rename
        </div>
      </li>
    </>
  )
}

export default RenameItem