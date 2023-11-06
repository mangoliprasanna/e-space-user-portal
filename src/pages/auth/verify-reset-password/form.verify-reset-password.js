import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';

import { useNavigate } from 'react-router';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { Stack } from '@mui/system';
import { CircularProgress, Typography } from '@mui/material';
import config from '../../../config';
import { PATH_AUTH } from '../../../routes/paths';
import { authFormElements } from '../../../utils/form.utils';
import useAuth from '../../../hooks/useAuth';
import ToastHelper from '../../../utils/toast.utils';



function VerifyResetPasswordForm() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState();
  const { verifyResetPassword, requestResetPassword, tempUser } = useAuth();

  const verifyOtp = async (otp) => {
    try {
      setLoading(true);
      await verifyResetPassword(tempUser.email, otp);
      setOtp();
      navigate(PATH_AUTH.resetPassword);
    } catch (e) {
      console.log(e);
      setOtp();
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
        {loading ? (

          <center>
            <CircularProgress />
          </center>
        ) : (
          <MuiOtpInput
            disabled={loading}
            length={config.otpLength}
            autoFocus
            value={otp}
            onChange={setOtp}
            onComplete={verifyOtp}
          />
        )}

        <br />

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>

          {/* "Resend OTP" link */}
          <Typography onClick={resendOtp} variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            Resend OTP
          </Typography>
        </Stack>
      </form>
    </div>
  );
}

export default VerifyResetPasswordForm;

