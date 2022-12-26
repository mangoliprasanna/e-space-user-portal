
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

import { authFormElements } from '../../../utils/form.utils';
import { PATH_AUTH, PATH_DASHBOARD } from '../../../routes/paths';
import useAuth from '../../../hooks/useAuth';

function LoginForm() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const performLogin = async (form) => {
    try {
      setLoading(true);
      await login(form.email, form.password);
      navigate(PATH_DASHBOARD.dashboard);
    } catch (e) {
      setLoading(false);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
    validationSchema: Yup.object({
      email: authFormElements.email,
      password: authFormElements.password,
      rememberMe: authFormElements.rememberMe,
    }),
    onSubmit: performLogin,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={`form-group has-feedback ${formik.errors.email ? 'has-error' : null}`}>
          <input
            type="email"
            className="form-control"
            disabled={loading}
            placeholder='Email Address'
            {...formik.getFieldProps('email')}
          />
          <span className="glyphicon glyphicon-envelope form-control-feedback" />
          {formik.errors.email ? <span className="help-block">{formik.errors.email}</span> : null}
        </div>
        <div className={`form-group has-feedback ${formik.errors.password ? 'has-error' : null}`}>
          <input
            type="password"
            placeholder='Password'
            disabled={loading}
            className="form-control"
            {...formik.getFieldProps('password')}
          />
          <span className="glyphicon glyphicon-lock form-control-feedback" />
          {formik.errors.password ? <span className="help-block">{formik.errors.password}</span> : null}
        </div>
        <div className="row">
          <div className="col-xs-7">
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                /> Remember me
              </label>
            </div>
          </div>
          <div className="col-xs-5">
            <button disabled={loading} type="submit" className="btn btn-primary btn-block">
              {loading ? (<i className="fa fa-refresh fa-spin" />) : 'Sign In'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
