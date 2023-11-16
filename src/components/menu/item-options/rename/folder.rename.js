import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, FormHelperText, OutlinedInput } from '@mui/material';
import Spinner from '../../../spinner';
import {
  folderState,
  renameFolderApiCall
} from "../../../../redux/reducers/storage.reducer";

const RenameFolderForm = ({ closeDialog, code, name }) => {

  const dispatch = useDispatch();

  const { isLoading } = useSelector(folderState);

  const renameFolder = ({ folderName }) => {
    dispatch(renameFolderApiCall(code, folderName))
      .then(() => closeDialog())
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

  const disableAction = formik.getFieldProps('folderName').value === name;

  if (isLoading === true) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <FormControl fullWidth >
            <OutlinedInput
              type="text"
              placeholder='Folder Name'
              disabled={isLoading}
              className="form-control"
              autoComplete={false}
              autoFocus
              {...formik.getFieldProps('folderName')}
            />
            {formik.touched.folderName && formik.errors.folderName && (
              <FormHelperText error>
                {formik.errors.folderName}
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <br />

        <div style={{
          marginTop: "15px",
          marginBottom: "15px",
          float: 'right'
        }} >
          <Button
            type="submit"
            disabled={disableAction}
            variant="contained"
            color="secondary">Rename</Button>
        </div>
      </form>
    </>
  )
}

RenameFolderForm.propTypes = {
  closeDialog: PropTypes.func,
  code: PropTypes.string,
  name: PropTypes.string,
};

export default RenameFolderForm;