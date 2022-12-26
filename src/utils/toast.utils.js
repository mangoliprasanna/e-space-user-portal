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
  }
}

export default ToastHelper;