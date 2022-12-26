import axios from '../utils/axios.utils';

const _wrapper = (path) => `/identity${path}`

const _endpoints = {
  login: _wrapper('/user/authenticate'),
  register: _wrapper('/user/create'),
  verifyAccount: _wrapper('/user/verifyAccount'),
  resendVerificationOtp: _wrapper('/user/resendVerificationOtp'),
  requestResetPassword: _wrapper('/user/requestResetPassword'),
  verifyResetPassword: _wrapper('/user/verifyResetPassword'),
  resetPassword: _wrapper('/user/resetPassword'),
  renewToken: _wrapper('/user/renewToken'),
  changePassword: _wrapper('/user/changePassword'),
  profile: _wrapper('/user/profile')
}

export const UserService = {
  login: (email, password) => axios.post(_endpoints.login, { email, password }),
  register: (form) => axios.post(_endpoints.register, { ...form }),
  verifyAccount: (userId, otp) => axios.post(_endpoints.verifyAccount, { userId, otp }),
  resendVerificationOtp: (userId) => axios.post(_endpoints.resendVerificationOtp, { userId }),
  requestResetPassword: (email) => axios.post(_endpoints.requestResetPassword, { email }),
  verifyResetPassword: (email, otp) => axios.post(_endpoints.verifyResetPassword, { email, otp }),
  resetPassword: (token, newPassword) => axios.post(_endpoints.resetPassword, { token, newPassword }),
  renewToken: (refresh) => axios.post(_endpoints.renewToken, { refresh }),
  getProfile: () => axios.get(_endpoints.profile),
  updateProfile: (name, email) => axios.patch(_endpoints.profile, { name, email }),
  changePassword: (oldPassword, newPassword) => axios.post(_endpoints.changePassword, { oldPassword, newPassword }),
};