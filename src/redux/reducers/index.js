import { combineReducers } from '@reduxjs/toolkit';
import browserReducer from './browser.reducer';
import objectReducer from './object.reducer';
import storageReducer from './storage.reducer';
import uploadReducer from './uploader.reducer';
import customizationReducer from './customization.reducer';
import dialogReducer from './dialog.reducer';

export default combineReducers({
  browser: browserReducer,
  objects: objectReducer,
  storage: storageReducer,
  dialog: dialogReducer,
  uploader: uploadReducer,
  customization: customizationReducer
});