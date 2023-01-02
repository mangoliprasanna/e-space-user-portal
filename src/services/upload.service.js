import axios from '../utils/axios.utils';

const _wrapper = (path) => `/container${path}`;

const _endpoints = {
  upload: _wrapper(`/storage/upload`),
};

export const UploadService = {
  upload: (code, file, progress) => {

    const uploadForm = new FormData();
    uploadForm.append('file', file);
    uploadForm.append('code', code);

    return axios.post(
      _endpoints.upload,
      uploadForm,
      { onUploadProgress: progress }
    );
  },
};