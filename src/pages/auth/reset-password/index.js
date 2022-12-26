import { useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ToastHelper from '../../../utils/toast.utils';
import ResetPasswordForm from './form.reset-password';
import { PATH_AUTH } from '../../../routes/paths';
import { AuthFooter, AuthHeader } from '../common';


export default function ResetPassword() {
  document.body.className = 'hold-transition login-page';
  document.title = 'Reset Password - ESpace';
  return (
    <>
      <div className="login-box">
        <AuthHeader />
        <div className="box login-box-body">
          {/* <div className="overlay">
            <i className="fa fa-refresh fa-spin" />
          </div> */}
          <div className="box-header">
            <h3 className="box-title">Create new password</h3>
          </div>
          <div className='box-body'>
            <ResetPasswordForm />
          </div>
        </div>
        <AuthFooter />
      </div>
    </>
  );
}
