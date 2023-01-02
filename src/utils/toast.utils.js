import toast from 'react-hot-toast';

const defaultSettings = {
  position: 'top-right',
}

const ToastHelper = {
  success: (msg, settings = defaultSettings) => {
    toast.success(msg, settings);
  },
  error: (msg, settings = defaultSettings) => {
    toast.error(msg, settings);
  },
  promise: (promise, success, error, settings = defaultSettings) => {
    toast.promise(promise, {
      loading: 'Working...',
      success,
      error,
    }, settings);
  }
}

export default ToastHelper;