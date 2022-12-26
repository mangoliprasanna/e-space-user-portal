import { useNavigate } from 'react-router';
import { PATH_AUTH } from '../../../routes/paths';
import { AuthFooter, AuthHeader } from '../common';
import '../style.css';
import ForgetPasswordForm from './form.forgot-password';

export default function ForgetPassword() {
  document.body.className = 'hold-transition login-page';
  document.title = 'Forgot password - ESpace';
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
            <h3 className="box-title">Forgot password?</h3>
          </div>
          <div className='box-body'>
            <p>
              Submit your email address and we'll send you a link to reset your password.
            </p>
            <ForgetPasswordForm />
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
