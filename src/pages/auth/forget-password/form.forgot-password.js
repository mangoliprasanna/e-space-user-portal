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
import { authFormElements } from '../../../utils/form.utils';
import { PATH_AUTH } from '../../../routes/paths';
import useAuth from '../../../hooks/useAuth';
import AnimateButton from '../../../components/button.animation';

function ForgetPasswordForm() {
  const navigate = useNavigate();
  const theme = useTheme();

  const { requestResetPassword } = useAuth();

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
        <FormControl fullWidth error={Boolean(formik.touched.email && formik.errors.email)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="auth-login-email">Email Address </InputLabel>
          <OutlinedInput
            id="auth-login-email"
            type="email"
            value={formik.values.email}
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label="Email Address"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <FormHelperText error id="auth-login-error-email">
              {formik.errors.email}
            </FormHelperText>
          )}
        </FormControl>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation disabled={loading} fullWidth size="large" type="submit" variant="contained" color="secondary">
              Send Email
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </div>
  );
}

export default ForgetPasswordForm;
