import { createSlice } from '@reduxjs/toolkit'
import { BrowserService } from '../../services/browser.service'
import { objectAppend } from './object.reducer';
import { pushFolder } from './browser.reducer';

const initialState = {
  folder: {
    isLoading: false,
    hasError: false,
  },
  renameFolder: {
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
      state.folder.isLoading = action.payload;
    },
    resetFolder: (state) => {
      Object.assign(state.folder, initialState.folder);
    }
  },
})

export const {
  setFolderLoading,
  setFolderError,
  resetFolder
} = storageSlice.actions

export function createFolderApiCall(name, code) {
  return async (dispatch) => {
    try {
      dispatch(setFolderLoading(true));
      const res = await BrowserService.createFolder(name, code || 'root');
      dispatch(objectAppend({
        [res.code]: res
      }));
      dispatch(pushFolder(res.code));
      dispatch(setFolderLoading(false));
    } catch (e) {
      dispatch(setFolderError(true));
      throw e;
    }
  }
}

export const folderState = (state) => state.storage.folder;

export const getCurrentFolderCode = (state) => state.browser.currentFolder.code;

export default storageSlice.reducer;