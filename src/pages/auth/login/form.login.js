import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

import AnimateButton from '../../../components/button.animation';
import { authFormElements } from '../../../utils/form.utils';
import { PATH_DASHBOARD } from '../../../routes/paths';
import useAuth from '../../../hooks/useAuth';

function LoginForm() {

  const navigate = useNavigate();
  const theme = useTheme();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);

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

        <FormControl fullWidth error={Boolean(formik.touched.password && formik.errors.password)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="auth-login-password">Password</InputLabel>
          <OutlinedInput
            id="auth-login-password"
            type="password"
            value={formik.values.password}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <FormHelperText error id="auth-login-error-password">
              {formik.errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
            }
            label="Remember me"
          />
          <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            Forgot Password?
          </Typography>
        </Stack>
        {formik.errors.submit && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation disabled={loading} fullWidth size="large" type="submit" variant="contained" color="secondary">
              Sign in
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </div>
  );
}

export default LoginForm;
