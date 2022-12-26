
import { useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { PATH_AUTH } from '../../../routes/paths';
import { AuthFooter, AuthHeader } from '../common';
import VerifyResetPasswordForm from './form.verify-reset-password';

export default function VerifyResetPassword() {
  document.body.className = 'hold-transition login-page';
  document.title = 'Verify OTP - ESpace';
  const { clearTempUser } = useAuth();
  const navigate = useNavigate();
  const backToLogin = () => {
    clearTempUser();
    navigate(PATH_AUTH.login);
  };
  return (
    <>
      <div className="login-box">
        <AuthHeader />
        <div className="box login-box-body">
          {/* <div className="overlay">
            <i className="fa fa-refresh fa-spin" />
          </div> */}
          <div className="box-header">
            <h3 className="box-title">Verify OTP</h3>
          </div>
          <div className='box-body'>
            <p>
              Enter the One Time Password (OTP) received on your email address
            </p>
            <VerifyResetPasswordForm />
            <div className='pull-left'>
              <a href='#' onClick={backToLogin}>Back to login</a> <br />
            </div>
          </div>

        </div>
        <AuthFooter />
      </div>
    </>
  );
}
