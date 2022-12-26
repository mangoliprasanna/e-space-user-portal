import { useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ToastHelper from '../../../utils/toast.utils';
import LoginForm from './form.login';
import { PATH_AUTH, PATH_DASHBOARD } from '../../../routes/paths';
import { AuthFooter, AuthHeader } from '../common';


export default function Login() {
  document.body.className = 'hold-transition login-page';
  document.title = 'Login - ESpace';
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  if(isAuthenticated) navigate(PATH_DASHBOARD.dashboard);
  return (
    <>
      <div className="login-box">
        <AuthHeader />
        <div className="box login-box-body">
          <div className="box-header">
            <h3 className="box-title">Let's Get Started</h3>
          </div>
          <div className='box-body'>
            <LoginForm />
            <br />
            <div className='pull-left'>
              <a href='#' onClick={() => navigate(PATH_AUTH.forgotPassword)}>Forgot Password ?</a> <br />
              <a href='#' onClick={() => navigate(PATH_AUTH.register)}>Create new account</a>
            </div>
          </div>
        </div>
        <AuthFooter />
      </div>
    </>
  );
}
