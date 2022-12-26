import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { authFormElements } from '../../../utils/form.utils';
import { PATH_AUTH } from '../../../routes/paths';

import useAuth from '../../../hooks/useAuth';
import ToastHelper from '../../../utils/toast.utils';

function ResetPasswordForm() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { resetPassword, tempUser } = useAuth();

  const reset = async (form) => {
    try {
      setLoading(true);
      await resetPassword(tempUser.token, form.newPassword);
      return navigate(PATH_AUTH.login);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      newPassword: authFormElements.password,
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    }),
    onSubmit: reset,
  });

  if (!tempUser) {
    ToastHelper.error('Invalid user!!!');
    return navigate(PATH_AUTH.login);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={`form-group has-feedback ${formik.errors.newPassword ? 'has-error' : null}`}>
          <input
            type="password"
            placeholder='New Password'
            disabled={loading}
            className="form-control"
            {...formik.getFieldProps('newPassword')}
          />
          <span className="glyphicon glyphicon-lock form-control-feedback" />
          {formik.errors.newPassword ? <span className="help-block">{formik.errors.newPassword}</span> : null}
        </div>
        <div className={`form-group has-feedback ${formik.errors.confirmPassword ? 'has-error' : null}`}>
          <input
            type="password"
            placeholder='Confirm Password'
            disabled={loading}
            className="form-control"
            {...formik.getFieldProps('confirmPassword')}
          />
          <span className="glyphicon glyphicon-lock form-control-feedback" />
          {formik.errors.confirmPassword ? <span className="help-block">{formik.errors.confirmPassword}</span> : null}
        </div>
        <div className="row">
          <div className="col-xs-7" />
          <div className="col-xs-5">
            <button disabled={loading} type="submit" className="btn btn-primary btn-block">
              {loading ? (<i className="fa fa-refresh fa-spin" />) : 'Reset'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
