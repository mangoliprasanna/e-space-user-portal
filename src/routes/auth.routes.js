import { lazy } from 'react';
import Loadable from '../components/loadable';
import ForgetPassword from '../pages/auth/forget-password';
import { PATH_AUTH } from './paths';


const Login = Loadable(lazy(() => import('../pages/auth/login')));
const Register = Loadable(lazy(() => import('../pages/auth/register')));
const VerifyResetPassword = Loadable(lazy(() => import('../pages/auth/verify-reset-password')));
const VerifyAccount = Loadable(lazy(() => import('../pages/auth/verify-account')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/reset-password')));


const AuthRoutes = {
  path: '/',
  children: [
    {
      path: PATH_AUTH.login,
      element: <Login />,
    },
    {
      path: PATH_AUTH.forgotPassword,
      element: <ForgetPassword />,
    },
    {
      path: PATH_AUTH.register,
      element: <Register />,
    },
    {
      path: PATH_AUTH.verifyResetPassword,
      element: <VerifyResetPassword />,
    },
    {
      path: PATH_AUTH.verifyAccount,
      element: <VerifyAccount />,
    },
    {
      path: PATH_AUTH.resetPassword,
      element: <ResetPassword />,
    },
  ]
};

export default AuthRoutes;
