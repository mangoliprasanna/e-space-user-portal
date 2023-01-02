import axios from '../utils/axios.utils';

const _wrapper = (path) => `/container${path}`;

const _endpoints = {
  browse: (key = 'root') => _wrapper(`/browse/${key}`),
  createFolder: _wrapper('/folder/create'),
  updateFolder: (code) => _wrapper(`/folder/${code}`),
  updateFile: (code) => _wrapper(`/file/${code}`),
};

export const BrowserService = {
  browse: (key) => axios.get(_endpoints.browse(key)),
  createFolder: (name, parent) => axios.post(_endpoints.createFolder, { name, parent }),
  updateFolder: (code, props) => axios.patch(_endpoints.updateFolder(code), { ...props }),
  updateFile: (code, props) => axios.patch(_endpoints.updateFile(code), { ...props })
};