
// import { useNavigate } from 'react-router';
// import useAuth from '../../../hooks/useAuth';
// import { PATH_AUTH } from '../../../routes/paths';
// import { AuthFooter, AuthHeader } from '../common';
// import VerifyResetPasswordForm from './form.verify-reset-password';

// export default function VerifyResetPassword() {
//   document.body.className = 'hold-transition login-page';
//   document.title = 'Verify OTP - ESpace';
//   const { clearTempUser } = useAuth();
//   const navigate = useNavigate();
//   const backToLogin = () => {
//     clearTempUser();
//     navigate(PATH_AUTH.login);
//   };
//   return (
//     <>
//       <div className="login-box">
//         <AuthHeader />
//         <div className="box login-box-body">
//           {/* <div className="overlay">
//             <i className="fa fa-refresh fa-spin" />
//           </div> */}
//           <div className="box-header">
//             <h3 className="box-title">Verify OTP</h3>
//           </div>
//           <div className='box-body'>
//             <p>
//               Enter the One Time Password (OTP) received on your email address
//             </p>
//             <VerifyResetPasswordForm />
//             <div className='pull-left'>
//               <a href='#' onClick={backToLogin}>Back to login</a> <br />
//             </div>
//           </div>

//         </div>
//         <AuthFooter />
//       </div>
//     </>
//   );
// }


import { Link, useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import VerifyResetPasswordForm from './form.verify-reset-password';
import AuthWrapper from '../auth.wrapper';
import AuthCardWrapper from '../card.wrapper';
import { AuthFooter, AuthHeader } from '../common';
import { PATH_AUTH } from '../../../routes/paths';
import useAuth from '../../../hooks/useAuth';

const VerifyResetPassword = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const { clearTempUser } = useAuth();
  const navigate = useNavigate();
  const backToLogin = () => {
    clearTempUser();
    navigate(PATH_AUTH.login);
  };

  return (
    <AuthWrapper>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#">
                      <AuthHeader />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography variant="caption" fontSize="14px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            Enter the One Time Password (OTP) received on your email address
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <VerifyResetPasswordForm />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Typography onClick={backToLogin} variant="subtitle1" sx={{ textDecoration: 'none' }}>
                        Back to Login
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default VerifyResetPassword;