import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { authFormElements } from '../../../utils/form.utils';
import { PATH_AUTH } from '../../../routes/paths';

import useAuth from '../../../hooks/useAuth';


function RegisterForm() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const performRegistration = async (form) => {
    try {
      setLoading(true);
      await register(form);
      navigate(PATH_AUTH.verifyAccount);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: authFormElements.email,
      password: authFormElements.password,
    }),
    onSubmit: performRegistration,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={`form-group has-feedback ${formik.errors.name ? 'has-error' : null}`}>
          <input
            type="text"
            className="form-control"
            disabled={loading}
            placeholder='Name'
            {...formik.getFieldProps('name')}
          />
          <span className="glyphicon glyphicon-user form-control-feedback" />
          {formik.errors.name ? <span className="help-block">{formik.errors.name}</span> : null}
        </div>
        <div className={`form-group has-feedback ${formik.errors.email ? 'has-error' : null}`}>
          <input
            type="email"
            className="form-control"
            placeholder='Email Address'
            disabled={loading}
            {...formik.getFieldProps('email')}
          />
          <span className="glyphicon glyphicon-envelope form-control-feedback" />
          {formik.errors.email ? <span className="help-block">{formik.errors.email}</span> : null}
        </div>
        <div className={`form-group has-feedback ${formik.errors.password ? 'has-error' : null}`}>
          <input
            type="password"
            placeholder='Password'
            className="form-control"
            disabled={loading}
            {...formik.getFieldProps('password')}
          />
          <span className="glyphicon glyphicon-lock form-control-feedback" />
          {formik.errors.password ? <span className="help-block">{formik.errors.password}</span> : null}
        </div>
        <div className="checkbox">
          <label>
            <input disabled={loading} type="checkbox" required /> I agree to all the terms and conditions
          </label>
        </div>
        <div className="row">
          <div className="col-xs-7" />
          <div className="col-xs-5">
            <button disabled={loading} type="submit" className="btn btn-primary btn-block">
              {loading ? (<i className="fa fa-refresh fa-spin" />) : 'Register'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
