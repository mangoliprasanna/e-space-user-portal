// import { useNavigate } from 'react-router';
// import { PATH_AUTH } from '../../../routes/paths';
// import { AuthFooter, AuthHeader } from '../common';
// import '../style.css';
// import ForgetPasswordForm from './form.forgot-password';

// export default function ForgetPassword() {
//   document.body.className = 'hold-transition login-page';
//   document.title = 'Forgot password - ESpace';
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="login-box">
//         <AuthHeader />
//         <div className="box login-box-body">
//           {/* <div className="overlay">
//             <i className="fa fa-refresh fa-spin" />
//           </div> */}
//           <div className="box-header">
//             <h3 className="box-title">Forgot password?</h3>
//           </div>
//           <div className='box-body'>
//             <p>
//               Submit your email address and we'll send you a link to reset your password.
//             </p>
//             <ForgetPasswordForm />
//             <div className='pull-left'>
//               <a href='#' onClick={() => navigate(PATH_AUTH.login)}>Back to login</a> <br />
//             </div>
//           </div>

//         </div>
//         <AuthFooter />
//       </div>
//     </>
//   );
// }



import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import ForgetPasswordForm from './form.forgot-password';
import AuthWrapper from '../auth.wrapper';
import AuthCardWrapper from '../card.wrapper';
import { AuthFooter, AuthHeader } from '../common';
import { PATH_AUTH } from '../../../routes/paths';

const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

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
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            Forget Your Password
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <ForgetPasswordForm />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Typography component={Link} to={PATH_AUTH.login} variant="subtitle1" sx={{ textDecoration: 'none' }}>
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

export default Login;
