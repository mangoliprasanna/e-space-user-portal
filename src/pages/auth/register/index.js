// import { useNavigate } from 'react-router';
// import useAuth from '../../../hooks/useAuth';
// import ToastHelper from '../../../utils/toast.utils';
// import RegisterForm from './form.register';
// import { PATH_AUTH } from '../../../routes/paths';
// import { AuthFooter, AuthHeader } from '../common';


// export default function Register() {
//   document.body.className = 'hold-transition login-page';
//   document.title = 'Register - ESpace';
//   const { login } = useAuth();
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
//             <h3 className="box-title">New Account</h3>
//           </div>
//           <div className='box-body'>
//             <p>
//               Enter following details to create a new account
//             </p>
//             <RegisterForm />
//             <br />
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

// import Logo from 'ui-component/Logo';
// import AuthFooter from 'ui-component/cards/AuthFooter';
import RegisterForm from './form.register';
import AuthWrapper from '../auth.wrapper';
import AuthCardWrapper from '../card.wrapper';
import { AuthFooter, AuthHeader } from '../common';
import { PATH_AUTH } from '../../../routes/paths';

const Register = () => {
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
                            Sign up with Email address
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <RegisterForm />
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

export default Register;

