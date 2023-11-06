import { useRoutes } from 'react-router-dom';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Router() {
  return useRoutes([AuthRoutes, AppRoutes]);
}

export default Router;
