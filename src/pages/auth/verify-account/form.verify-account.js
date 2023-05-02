import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';

import { authFormElements } from '../../../utils/form.utils';
import useAuth from '../../../hooks/useAuth';
import { PATH_AUTH } from '../../../routes/paths';
import ToastHelper from '../../../utils/toast.utils';

function VerifyAccountForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    tempUser,
    verifyAccount,
    resendAccountVerificationOtp,
  } = useAuth();

  const performVerifyAccount = async (form) => {
    try {
      setLoading(true);
      await verifyAccount(tempUser._id, form.otp);
      navigate(PATH_AUTH.login);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const resendOtp = async (form) => {
    try {
      setLoading(true);
      await resendAccountVerificationOtp(tempUser._id);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: Yup.object({
      otp: authFormElements.otp,
    }),
    onSubmit: performVerifyAccount,
  });


  if (!tempUser) {
    ToastHelper.error('Invalid user!');
    return navigate(PATH_AUTH.register);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={`form-group has-feedback ${formik.errors.otp ? 'has-error' : null}`}>
          <input
            type="text"
            className="form-control"
            placeholder='OTP'
            disabled={loading}
            {...formik.getFieldProps('otp')} />
          <span className="glyphicon glyphicon-lock form-control-feedback" />
          {formik.errors.otp ? <span className="help-block">{formik.errors.otp}</span> : null}
        </div>
        <br />
        <div className='row'>
          <div className='col-xs-6'>
            <button type="submit" className="btn btn-primary">
              {loading ? (<i className="fa fa-refresh fa-spin" />) : 'Verify'}
            </button>
          </div>
          <div className='col-xs-6'>
            <button onClick={resendOtp} type="button" className="btn btn-default pull-right">
              {loading ? (<i className="fa fa-refresh fa-spin" />) : 'Resend OTP'}
            </button>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
}

export default VerifyAccountForm;
