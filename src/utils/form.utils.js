import * as Yup from 'yup';

export const authFormElements = {
  email: Yup.string().email('Invalid Email Address').required('Email required'),
  password: Yup.string()
    .required('Password required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'Password shoud be Minimum eight characters, at least one small, captial letter and one number'
    ),
  otp: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, 'Must be exactly 4 digits')
    .max(4, 'Must be exactly 4 digits'),
};