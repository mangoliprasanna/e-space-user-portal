import axios from '../utils/axios.utils';

const _wrapper = (path) => `/container${path}`;

const _endpoints = {
  browse: (key = 'root') => _wrapper(`/browse/${key}`),
};

export const BrowserService = {
  browse: (key) => axios.get(_endpoints.browse(key))
};