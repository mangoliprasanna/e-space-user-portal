import { lazy } from 'react';
import Loadable from '../components/loadable';

import AuthGuard from './auth.guard';
import { PATH_DASHBOARD } from './paths';
import MainLayout from '../layout/main-layout';

const Dashboard = Loadable(lazy(() => import('../pages/dashboard')));
const UserProfile = Loadable(lazy(() => import('../pages/profile')));
const Browse = Loadable(lazy(() => import('../pages/browse')));

const AppRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
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
