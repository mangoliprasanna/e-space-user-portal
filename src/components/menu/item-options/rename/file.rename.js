import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, FormHelperText, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import Spinner from '../../../spinner';
import {
  fileState,
  renameFileApiCall,
} from "../../../../redux/reducers/storage.reducer";

const RenameFileForm = ({ closeDialog, code, name }) => {
  const re = /(?:\.([^.]+))?$/;
  const dispatch = useDispatch();
  const ext = re.exec(name)[1];
  const { isLoading } = useSelector(fileState);
  const formik = useFormik({
    initialValues: {
      fileName: name.replace(/.[^/.]+$/, ''),
    },
    validationSchema: Yup.object({
      fileName: Yup.string()
        .required("Enter file name")
        .matches(/^(?!\.)(?!com[0-9]$)(?!con$)(?!lpt[0-9]$)(?!nul$)(?!prn$)[^|*?:<>/$"]*[^.|*?:<>/$"]+$/, "Invalid File Name"),
    }),
    onSubmit: ({ fileName }) => {
      dispatch(renameFileApiCall(code, `${fileName}${ext ? `.${ext}` : ''}`))
        .then(() => closeDialog());
    },
  });
  const disableAction = formik.getFieldProps('fileName').value === name;
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
              fullWidth
              type="text"
              placeholder='File Name'
              endAdornment={<InputAdornment position="end">.{ext}</InputAdornment>}
              autoComplete={false}
              {...formik.getFieldProps('fileName')}
            />
            {formik.touched.fileName && formik.errors.fileName && (
              <FormHelperText error>
                {formik.errors.fileName}
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

RenameFileForm.propTypes = {
  closeDialog: PropTypes.func,
  code: PropTypes.string,
  name: PropTypes.string,
};

export default RenameFileForm;