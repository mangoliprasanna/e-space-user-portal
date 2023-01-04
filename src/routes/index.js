import { useRoutes } from 'react-router-dom';
import Login from '../pages/auth/login';
import DashboardLayout from '../layout';
import Dashboard from '../pages/dashboard';
import AuthGuard from './auth.guard';
import ForgetPassword from '../pages/auth/forget-password';
import { PATH_AUTH, PATH_DASHBOARD } from './paths';
import Register from '../pages/auth/register';
import VerifyResetPassword from '../pages/auth/verify-reset-password';
import VerifyAccount from '../pages/auth/verify-account';
import ResetPassword from '../pages/auth/reset-password';
import UserProfile from '../pages/profile';
import Browse from '../pages/browse';

function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: '',
          element: <Dashboard />,
        },
        {
          path: PATH_DASHBOARD.dashboard,
          element: <Dashboard />,
        },
        {
          path: PATH_DASHBOARD.profile,
          element: <UserProfile />,
        },
        {
          path: PATH_DASHBOARD.browse,
          element: <Browse />,
        },
        {
          path: PATH_DASHBOARD.stared,
          element: <Browse key='stared' type='stared' />,
        },
        {
          path: PATH_DASHBOARD.trashed,
          element: <Browse key='trashed' type='trashed' />,
        },
        {
          path: PATH_DASHBOARD.browseFolder(),
          element: <Browse />,
        },
      ],
    },
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
  ]);
}

export default Router;
