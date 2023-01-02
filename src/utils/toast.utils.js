import toast from 'react-hot-toast';

const defaultSettings = {
  posotion: 'top-right',
}

const ToastHelper = {
  success: (msg, settings = defaultSettings) => {
    toast.success(msg, settings);
  },
  error: (msg, settings = defaultSettings) => {
    toast.error(msg, settings);
  },
  promise: (promise, success, error) => {
    toast.promise(promise, {
      loading: 'Working...',
      success,
      error,
    });
  }
}

export default ToastHelper;