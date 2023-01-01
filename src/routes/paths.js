
const ROOTS_AUTH = '/auth';

const ROOTS_DASHBOARD = '';

function authPath(sublink) {
  return `${ROOTS_AUTH}${sublink}`;
}

function dashBoardPath(sublink) {
  return `${ROOTS_DASHBOARD}${sublink}`;
}

export const PATH_DASHBOARD = {
  dashboard: dashBoardPath('/dashboard'),
  browse: dashBoardPath('/browse'),
  browseFolder: dashBoardPath('/browse/folder/:key'),
  profile: dashBoardPath('/profile'),

}

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: authPath('/login'),
  register: authPath('/register'),
  forgotPassword: authPath('/forget-password'),
  verifyResetPassword: authPath('/verify-reset-password'),
  verifyAccount: authPath('/verify-account'),
  resetPassword: authPath('/reset-password'),
};