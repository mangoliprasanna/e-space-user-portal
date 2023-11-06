import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useTheme } from '@emotion/react';
import AnimateButton from '../../../components/button.animation';
import { authFormElements } from '../../../utils/form.utils';
import { PATH_AUTH } from '../../../routes/paths';

import useAuth from '../../../hooks/useAuth';
import ToastHelper from '../../../utils/toast.utils';

function ResetPasswordForm() {

  const theme = useTheme();

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
        <FormControl fullWidth error={Boolean(formik.touched.newPassword && formik.errors.newPassword)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="auth-reset-password-new-password">Password</InputLabel>
          <OutlinedInput
            id="auth-reset-password-new-password"
            type="password"
            value={formik.values.newPassword}
            name="newPassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label="New Password"
            {...formik.getFieldProps('newPassword')}
          />
          {formik.touched.newPassword && formik.errors.newPassword && (
            <FormHelperText error id="auth-reset-password-error-new-password">
              {formik.errors.newPassword}
            </FormHelperText>
          )}
        </FormControl>
        <br />
        <FormControl fullWidth error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="auth-reset-password-confirm-password">Password</InputLabel>
          <OutlinedInput
            id="auth-reset-password-confirm-password"
            type="password"
            value={formik.values.confirmPassword}
            name="confirmPassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label="Confirm Password"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <FormHelperText error id="auth-reset-password-error-confirm-password">
              {formik.errors.confirmPassword}
            </FormHelperText>
          )}
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation disabled={loading} fullWidth size="large" type="submit" variant="contained" color="secondary">
              Reset Password
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
