import React from 'react'
import * as Yup from 'yup';
import { Button, FormControl, FormHelperText, InputAdornment, ListItemText, MenuItem, OutlinedInput } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { createFolderApiCall, folderState, getCurrentFolderCode } from '../../../../redux/reducers/storage.reducer';
import { hideDialog, shodwDialog } from '../../../../redux/reducers/dialog.reducer';
import Spinner from '../../../../components/spinner';

const NewFolderForm = ({ closeDialog }) => {
  const dispatch = useDispatch();
  const currentFolderCode = useSelector(getCurrentFolderCode);
  const { isLoading } = useSelector(folderState);
  const createNewFolder = ({ folderName }) => {
    dispatch(createFolderApiCall(folderName, currentFolderCode))
      .then(() => closeDialog());
  }
  const formik = useFormik({
    initialValues: {
      folderName: 'Untitled Folder',
    },
    validationSchema: Yup.object({
      folderName: Yup.string()
        .required("Enter folder name")
        .matches(/^([a-zA-Z0-9][^*/><?|:]*)$/, "Invalid Folder Name"),
    }),
    onSubmit: createNewFolder,
  });

  if (isLoading === true) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>

        <FormControl fullWidth >
          <OutlinedInput
            fullWidth
            type="text"
            placeholder='Folder Name'
            autoComplete={false}
            {...formik.getFieldProps('folderName')}
          />
          {formik.touched.folderName && formik.errors.folderName && (
            <FormHelperText error>
              {formik.errors.folderName}
            </FormHelperText>
          )}
        </FormControl>
        <br />

        <div style={{
          marginTop: "15px",
          marginBottom: "15px",
          float: 'right'
        }} >
          <Button
            type="submit"
            loading={isLoading}
            variant="contained"
            color="secondary">Create</Button>
        </div>
      </form>
    </>
  )
}

NewFolderForm.propTypes = {
  closeDialog: PropTypes.func,
};

function NewFolderOption({ handleClose }) {

  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(hideDialog());
  }

  const openNewFolderDialog = () => {
    const dialogConfig = {
      open: true,
      title: 'New Folder',
      fullWidth: true,
      maxWidth: 'sm',
      content: (
        <NewFolderForm closeDialog={closeDialog}  />
      )
    };
    dispatch(shodwDialog(dialogConfig));
    handleClose();
  }

  return (
    <>
      <MenuItem onClick={openNewFolderDialog}>
        <ListItemIcon>
          <CreateNewFolderIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>New Folder</ListItemText>
      </MenuItem>
    </>
  )
}

NewFolderOption.propTypes = {
  handleClose: PropTypes.func,
};

export default NewFolderOption