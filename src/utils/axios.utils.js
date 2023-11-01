import axios from 'axios';
import config from '../config';
import ToastHelper from './toast.utils';

const axiosInstance = axios.create({
  baseURL: config.hostAPI,
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response.data;
    if (data.message) ToastHelper.success(data.message);
    return data;
  },
  (error) => {
    let errorMsg = 'Something went wrong';
    if (error.response && error.response.data) {
      if (error.response.data.message) {
        const { message } = error.response.data;
        errorMsg = message;
      }
    }
    ToastHelper.error(errorMsg);
    return Promise.reject(errorMsg);
  },
);

export default axiosInstance;
