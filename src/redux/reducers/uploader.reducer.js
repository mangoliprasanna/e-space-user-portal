import { createSlice } from '@reduxjs/toolkit'
import { UploadService } from '../../services/upload.service';
import { pushFile } from './browser.reducer';
import { objectAppend } from './object.reducer';

const initialState = {
  isUploading: false,
  items: {},
}

const allItemsUploading = (items) => {
  let isUploading = false;
  Object.keys(items).forEach((e) => {
    if (items[e].isUploading === true) {
      isUploading = true;
    }
  });
  return isUploading;
}

export const uploadSlice = createSlice({
  name: 'uploader',
  initialState,
  reducers: {
    pushItemForUpload: (state, action) => {
      const { payload } = action;
      Object.assign(state.items, payload);
      state.isUploading = false;
    },
    updateUploadingItem: (state, action) => {
      const { payload } = action;
      state.items[payload.id] = payload;
      state.isUploading = allItemsUploading(state.items);
    },
    removeUploadingItem: (state, action) => {
      const { payload } = action;
      delete state.items[payload];
      state.isUploading = allItemsUploading(state.items);
    },
    clearUploadingItems: (state) => Object.assign(state, initialState),
  },
})

export const {
  pushItemForUpload,
  updateUploadingItem,
  removeUploadingItem,
  clearUploadingItems,
} = uploadSlice.actions


export const uploadFileToContainer = (id, config) => async (dispatch) => {
  try {
    const response = await UploadService.upload(
      config.code,
      config.file,
      (e) => {
        const progress = Math.round((e.loaded * 100) / e.total)
        dispatch(updateUploadingItem({
          ...config,
          progress,
          isUploading: progress !== 100,
          id,
        }))
      });
    dispatch(objectAppend({
      [response.code]: response,
    }));
    dispatch(pushFile(response.code));
  } catch (e) {
    dispatch(removeUploadingItem(id));
    console.log(e);
  }
}

export const uploaderState = (state) => state.uploader;

export const getUploadItem = (state, id) => state.uploader.items[id];

export default uploadSlice.reducer;