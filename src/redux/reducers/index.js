import { combineReducers } from '@reduxjs/toolkit';
import browserReducer from './browser.reducer';
import objectReducer from './object.reducer';

export default combineReducers({
  browser: browserReducer,
  objects: objectReducer,
})