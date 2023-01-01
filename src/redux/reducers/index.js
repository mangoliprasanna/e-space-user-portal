import { combineReducers } from '@reduxjs/toolkit';
import browserReducer from './browser.reducer';

export default combineReducers({
  browser: browserReducer,
})