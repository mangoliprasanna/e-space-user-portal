import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { PATH_AUTH } from './paths';

AuthGuard.propTypes = {
  children: PropTypes.any,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();
  // const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <Navigate to={PATH_AUTH.login} />
    );
  }

  return <>{children}</>;
}
