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
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { authFormElements } from '../../../utils/form.utils';
import { PATH_AUTH } from '../../../routes/paths';

import useAuth from '../../../hooks/useAuth';
import AnimateButton from '../../../components/button.animation';


function RegisterForm() {

  const navigate = useNavigate();
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

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
        <FormControl fullWidth error={Boolean(formik.touched.name && formik.errors.name)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="auth-register-name">Name</InputLabel>
          <OutlinedInput
            id="auth-register-name"
            type="email"
            value={formik.values.name}
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label="Name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <FormHelperText error id="auth-register-error-email">
              {formik.errors.name}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={Boolean(formik.touched.email && formik.errors.email)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="auth-register-email">Email Address </InputLabel>
          <OutlinedInput
            id="auth-register-email"
            type="email"
            value={formik.values.email}
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label="Email Address"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <FormHelperText error id="auth-register-error-email">
              {formik.errors.email}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={Boolean(formik.touched.password && formik.errors.password)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="auth-register-password">Password</InputLabel>
          <OutlinedInput
            id="auth-register-password"
            type="password"
            value={formik.values.password}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            label="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <FormHelperText error id="auth-register-error-password">
              {formik.errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
          }
          label="I agree to all the terms and conditions"
        />

        {formik.errors.submit && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Box>
        )}

        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation disabled={loading} fullWidth size="large" type="submit" variant="contained" color="secondary">
              Register
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </div>
  );
}

export default RegisterForm;
