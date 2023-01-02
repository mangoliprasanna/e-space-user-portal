import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../../spinner';
import {
  fileState,
  renameFileApiCall,
} from "../../../redux/reducers/storage.reducer";


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
            disabled={disableAction}
            className="btn btn-primary pull-right">Rename</button>
        </div>
      </form>
    </>
  )
}

RenameFileForm.propTypes = {
  closeModel: PropTypes.func,
  code: PropTypes.string,
  name: PropTypes.string,
};

export default RenameFileForm;