
import { useNavigate } from 'react-router';
import { PATH_AUTH } from '../../../routes/paths';
import useAuth from '../../../hooks/useAuth';
import { AuthFooter, AuthHeader } from '../common';
import '../style.css';
import VerifyAccountForm from './form.verify-account';

export default function VerifyAccount() {
  const { clearTempUser } = useAuth();
  document.body.className = 'hold-transition login-page';
  document.title = 'Verify OTP - ESpace';
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
            <VerifyAccountForm />
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
