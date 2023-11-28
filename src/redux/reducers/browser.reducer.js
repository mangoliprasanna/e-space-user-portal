import { createSlice } from '@reduxjs/toolkit'
import { BrowserService } from '../../services/browser.service'
import { objectAppend } from './object.reducer';

const initialState = {
  currentFolder: {
    key: 'root',
    folders: [],
    files: [],
  },
  stack: ['root'],
  selectedItemKey: null,
  isLoading: true,
  hasError: false,
  isEmpty: true,
}

export const browserSlice = createSlice({
  name: 'browser',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setContent: (state, action) => {
      const { payload } = action;
      const currentFolder = payload.response;
      state.currentFolder = currentFolder;
      state.hasError = false;
      state.isLoading = false;
      if (currentFolder.code === 'root') state.stack = [];
      if (!state.stack.includes(currentFolder.code))
        state.stack.push(currentFolder.code);

      state.isEmpty = currentFolder.files.length === 0 && currentFolder.folders.length === 0
    },
    setSelectedItem: (state, action) => {
      state.selectedItemKey = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.hasError = action.payload;
    },
    browserStackPush: (state, action) => {
      if (action.payload && !state.stack.includes(action.payload))
        state.stack.push(action.payload);
    },
    browserStackPop: (state, action) => {
      if (state.stack.includes(action.payload)) {
        const i = state.stack.indexOf(action.payload);
        state.stack.splice(i + 1);
      }
    },
    resetBrowser: (state) => {
      state.currentFolder = initialState.currentFolder;
      state.selectedItemKey = initialState.selectedItemKey;
      state.isLoading = initialState.isLoading;
      state.hasError = initialState.hasError;
      state.isEmpty = initialState.isEmpty;
    },
    pushFolder: (state, action) => {
      state.currentFolder.folders.push(action.payload);
      state.isEmpty = state.currentFolder.files.length === 0 && state.currentFolder.folders.length === 0
    },
    pushFile: (state, action) => {
      state.currentFolder.files.push(action.payload);
      state.isEmpty = state.currentFolder.files.length === 0 && state.currentFolder.folders.length === 0
    },
    popFolder: (state, action) => {
      const i = state.currentFolder.folders.indexOf(action.payload);
      if (i !== -1) {
        state.currentFolder.folders.splice(i, 1);
        state.isEmpty = state.currentFolder.files.length === 0 && state.currentFolder.folders.length === 0
      }
    },
    popFile: (state, action) => {
      const i = state.currentFolder.files.indexOf(action.payload);
      if (i !== -1) {
        state.currentFolder.files.splice(i, 1);
        state.isEmpty = state.currentFolder.files.length === 0 && state.currentFolder.folders.length === 0
      }
    }
  },
})

export const {
  resetBrowser,
  setContent,
  pushFile,
  pushFolder,
  popFolder,
  popFile,
  setLoading,
  setSelectedItem,
  setError,
  browserStackPop } = browserSlice.actions

export function browse(key) {

  const processResponse = (res) => {
    const result = {};
    res?.files.forEach((e) => {
      result[e.code] = e;
    });
    res?.folders.forEach((e) => {
      result[e.code] = e;
    });
    return result;
  };


  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await BrowserService.browse(key);
      const processedData = processResponse(response);
      const state = {};
      state.response = {
        files: response.files.map((e) => e.code),
        folders: response.folders.map((e) => e.code),
        key: response.key || key,
        code: response.code || 'root',
      };
      dispatch(objectAppend(processedData));
      dispatch(setContent(state));
    } catch (e) {
      dispatch(setError(true));
    }
  }
}

export function createFolder(name, code) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await BrowserService.createFolder(name, code);
      dispatch(objectAppend({
        [res.code]: res
      }));
      dispatch(pushFolder(res.code));
    } catch (e) {
      dispatch(setError(true));
    }
  }
}

export const currentFolderState = (state) => state.browser;

export const browserStack = (state) => state.browser.stack;

export const infoMenuItem = (state) => state.objects.rawData[state.browser.selectedItemKey];

export default browserSlice.reducer;