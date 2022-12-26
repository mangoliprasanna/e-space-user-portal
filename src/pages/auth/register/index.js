import { useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ToastHelper from '../../../utils/toast.utils';
import RegisterForm from './form.register';
import { PATH_AUTH } from '../../../routes/paths';
import { AuthFooter, AuthHeader } from '../common';


export default function Register() {
  document.body.className = 'hold-transition login-page';
  document.title = 'Register - ESpace';
  const { login } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="login-box">
        <AuthHeader />
        <div className="box login-box-body">
          {/* <div className="overlay">
            <i className="fa fa-refresh fa-spin" />
          </div> */}
          <div className="box-header">
            <h3 className="box-title">New Account</h3>
          </div>
          <div className='box-body'>
            <p>
              Enter following details to create a new account
            </p>
            <RegisterForm />
            <br />
            <div className='pull-left'>
              <a href='#' onClick={() => navigate(PATH_AUTH.login)}>Back to login</a> <br />
            </div>
          </div>
        </div>
        <AuthFooter />
      </div>
    </>
  );
}
