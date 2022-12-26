import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

import { authFormElements } from '../../../utils/form.utils';
import { PATH_AUTH } from '../../../routes/paths';
import useAuth from '../../../hooks/useAuth';

function ForgetPasswordForm() {
  const navigate = useNavigate();

  const { requestResetPassword, clearTempUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const request = async (form) => {
    try {
      setLoading(true);
      await requestResetPassword(form.email);
      navigate(PATH_AUTH.verifyResetPassword);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: authFormElements.email,
    }),
    onSubmit: request,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={`form-group has-feedback ${formik.errors.email ? 'has-error' : null}`}>
          <label>Email Address</label>
          <input
            type="email"
            disabled={loading}
            className="form-control"
            {...formik.getFieldProps('email')}
          />
          <span className="glyphicon glyphicon-envelope form-control-feedback" />
          {formik.errors.email ? <span className="help-block">{formik.errors.email}</span> : null}
        </div>
        <div className="pull-right">
          <button disabled={loading} type="submit" className="btn btn-primary">
            {loading ? (<i className="fa fa-refresh fa-spin" />) : 'Send Email'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgetPasswordForm;
