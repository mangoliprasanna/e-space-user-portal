import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';

import { useNavigate } from 'react-router';
import { PATH_AUTH } from '../../../routes/paths';
import { authFormElements } from '../../../utils/form.utils';
import useAuth from '../../../hooks/useAuth';
import ToastHelper from '../../../utils/toast.utils';



function VerifyResetPasswordForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const { verifyResetPassword, requestResetPassword, tempUser } = useAuth();

  const verifyOtp = async (form) => {
    try {
      setLoading(true);
      await verifyResetPassword(tempUser.email, form.otp);
      navigate(PATH_AUTH.resetPassword);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const resendOtp = async () => {
    try {
      setLoading(true);
      await requestResetPassword(tempUser.email);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      otp: '',
      email: '',
    },
    validationSchema: Yup.object({
      otp: authFormElements.otp,
    }),
    onSubmit: verifyOtp,
  });


  if (!tempUser) {
    ToastHelper.error('Invalid User!!');
    return navigate(PATH_AUTH.login);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={`form-group has-feedback ${formik.errors.otp ? 'has-error' : null}`}>
          <input
            type="text"
            className="form-control"
            disabled={loading}
            placeholder='OTP'
            {...formik.getFieldProps('otp')}
          />
          <span className="glyphicon glyphicon-lock form-control-feedback" />
          {formik.errors.otp ? <span className="help-block">{formik.errors.otp}</span> : null}
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <button type="submit" className="btn btn-primary">
              {loading ? (<i className="fa fa-refresh fa-spin" />) : 'Verify'}
            </button>
          </div>
          <div className='col-lg-6'>
            <button onClick={resendOtp} type="button" className="btn btn-default pull-right">
              {loading ? (<i className="fa fa-refresh fa-spin" />) : 'Resend'}
            </button>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
}

export default VerifyResetPasswordForm;
