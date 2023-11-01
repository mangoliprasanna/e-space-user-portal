import { createSlice } from '@reduxjs/toolkit'
import { BrowserService } from '../../services/browser.service'
import { objectAppend, objectPop } from './object.reducer';
import { popFile, popFolder, pushFile, pushFolder } from './browser.reducer';

const initialState = {
  folder: {
    isLoading: false,
    hasError: false,
  },
  file: {
    isLoading: false,
    hasError: false,
  }
}

export const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    setFolderLoading: (state, action) => {
      state.folder.isLoading = action.payload;
    },
    setFolderError: (state, action) => {
      state.folder.isLoading = false;
      state.folder.hasError = action.payload;
    },
    resetFolder: (state) => {
      Object.assign(state.folder, initialState.folder);
    },
    setFileLoading: (state, action) => {
      state.file.isLoading = action.payload;
    },
    setFileError: (state, action) => {
      state.file.isLoading = false;
      state.file.hasError = action.payload;
    },
    resetFile: (state) => {
      Object.assign(state.file, initialState.file);
    }
  },
})

export const {
  setFolderLoading,
  setFolderError,
  resetFolder,
  setFileError,
  setFileLoading,
  resetFile,
} = storageSlice.actions

export function createFolderApiCall(name, code) {
  return async (dispatch) => {
    try {
      dispatch(setFolderLoading(true));
      const res = await BrowserService.createFolder(name, code || 'root');
      const { result } = res;
      dispatch(objectAppend({
        [result.code]: result
      }));
      dispatch(pushFolder(result.code));
      dispatch(setFolderLoading(false));
    } catch (e) {
      dispatch(setFolderError(true));
      throw e;
    }
  }
};

export function updateFolderApiCall(code, props, config) {
  return async (dispatch) => {
    try {
      dispatch(setFolderLoading(true));
      const res = await BrowserService.updateFolder(code, props);
      dispatch(setFolderLoading(false));
      const { result } = res;
      if (props && config) {
        if (config.isTrash === true && props.isTrash === false) {
          dispatch(popFolder(result.code));
        }
        if (config.isTrash === false && props.isTrash === true) {
          dispatch(popFolder(result.code));
        }
      }
      dispatch(objectAppend({
        [result.code]: result
      }));
    } catch (e) {
      dispatch(setFolderLoading(false));
      throw e;
    }

  }
};

export function renameFolderApiCall(code, name) {
  return async (dispatch) => {
    try {
      dispatch(setFolderLoading(true));
      const res = await BrowserService.renameFolder(code, name);
      dispatch(setFolderLoading(false));
      const { result } = res;
      dispatch(objectAppend({
        [result.code]: result
      }));
    } catch (e) {
      dispatch(setFolderLoading(false));
      throw e;
    }
  }
};

export function updateFileApiCall(code, props, config) {
  return async (dispatch) => {
    try {
      dispatch(setFileLoading(true));
      const res = await BrowserService.updateFile(code, props);
      dispatch(setFileLoading(false));
      const { result } = res;
      if (props && config) {
        if (config.isTrash === true && props.isTrash === false) {
          dispatch(popFile(result.code));
        }
        if (config.isTrash === false && props.isTrash === true) {
          dispatch(popFile(result.code));
        }
        if (config.isStared === true && props.isStared === false) {
          dispatch(popFile(result.code));
        }
      }
      dispatch(objectAppend({
        [result.code]: result
      }));
    } catch (e) {
      dispatch(setFileLoading(false));
      throw e;
    }
  }
};

export function deleteFileApiCall(code) {
  return async (dispatch) => {
    try {
      const res = await BrowserService.deleteFile(code);
      dispatch(popFile(code));
      dispatch(objectPop(code));
    } catch (e) {
      dispatch(setFileLoading(false));
      throw e;
    }
  }
};

export function deleteFolderApiCall(code) {
  return async (dispatch) => {
    try {
      const res = await BrowserService.deleteFolder(code);
      dispatch(popFolder(code));
      dispatch(objectPop(code));
    } catch (e) {
      dispatch(setFileLoading(false));
      throw e;
    }
  }
};

export function renameFileApiCall(code, name) {
  return async (dispatch) => {
    try {
      dispatch(setFileLoading(true));
      const res = await BrowserService.renameFile(code, name);
      dispatch(setFileLoading(false));
      const { result } = res;
      dispatch(objectAppend({
        [result.code]: result
      }));
    } catch (e) {
      dispatch(setFileLoading(false));
      throw e;
    }
  }
};

export const folderState = (state) => state.storage.folder;

export const fileState = (state) => state.storage.file;

export const getCurrentFolderCode = (state) => state.browser.currentFolder.code || 'root';

export default storageSlice.reducer;