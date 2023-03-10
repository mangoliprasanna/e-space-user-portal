import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../../spinner';
import { 
  folderState,
  renameFolderApiCall 
} from "../../../redux/reducers/storage.reducer";

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
            disabled={disableAction}
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

export default RenemFolderForm;