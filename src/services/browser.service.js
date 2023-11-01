import axios from '../utils/axios.utils';

const _wrapper = (path) => `/container${path}`;

const _endpoints = {
  browse: (key = 'root') => _wrapper(`/browse/${key}`),
  createFolder: _wrapper('/folder/create'),
  updateFolder: (code) => _wrapper(`/folder/${code}`),
  renameFolder: _wrapper(`/folder/rename`),
  updateFile: (code) => _wrapper(`/file/${code}`),
  renameFile: _wrapper(`/file/rename`),
  deleteFile: _wrapper(`/file/delete`),
  deleteFolder: _wrapper(`/folder/delete`),
};

export const BrowserService = {
  browse: (key) => axios.get(_endpoints.browse(key)),
  createFolder: (name, parent) => axios.post(_endpoints.createFolder, { name, parent }),
  updateFolder: (code, props) => axios.patch(_endpoints.updateFolder(code), { ...props }),
  renameFolder: (code, name) => axios.post(_endpoints.renameFolder, { code, name }),
  updateFile: (code, props) => axios.patch(_endpoints.updateFile(code), { ...props }),
  renameFile: (code, name) => axios.post(_endpoints.renameFile, { code, name }),
  deleteFolder: (code) => axios.delete(_endpoints.deleteFolder, { data: { code } }),
  deleteFile: (code) => axios.delete(_endpoints.deleteFile, { data: { code } }),
};