import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import Loadable from '../components/loadable';
import DashboardLayout from '../layout';
import Dashboard from '../pages/dashboard';
import AuthGuard from './auth.guard';
import { PATH_DASHBOARD } from './paths';
import UserProfile from '../pages/profile';
import Browse from '../pages/browse';

const AppRoutes = {
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
};

export default AppRoutes;
