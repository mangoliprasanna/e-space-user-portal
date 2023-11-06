import { createSlice } from '@reduxjs/toolkit'
import config from '../../config';

const initialState = {
  isOpen: [],
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
};

const customizationReducer = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    
  },
});

export default customizationReducer.reducer;