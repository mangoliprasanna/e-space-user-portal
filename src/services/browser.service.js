import axios from '../utils/axios.utils';

const _wrapper = (path) => `/container${path}`;

const _endpoints = {
  browse: (key = 'root') => _wrapper(`/browse/${key}`),
  createFolder: _wrapper('/folder/create'),
};

export const BrowserService = {
  browse: (key) => axios.get(_endpoints.browse(key)),
  createFolder: (name, parent) => axios.post(_endpoints.createFolder, { name, parent })
};