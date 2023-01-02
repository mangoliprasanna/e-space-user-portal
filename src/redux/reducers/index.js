import { combineReducers } from '@reduxjs/toolkit';
import browserReducer from './browser.reducer';
import objectReducer from './object.reducer';
import storageReducer from './storage.reducer';
import modalReducer from './modal.reducer';

export default combineReducers({
  browser: browserReducer,
  objects: objectReducer,
  storage: storageReducer,
  modal: modalReducer,
})