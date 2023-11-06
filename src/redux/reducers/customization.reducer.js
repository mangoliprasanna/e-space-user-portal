import { createSlice } from '@reduxjs/toolkit'
import config from '../../config';

const initialState = {
  isOpen: [],
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
};

const customizationSlicer = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    openMenu: (state, action) => {
      const { payload } = action;
      state.isOpen = [payload.id];
    },
    setMenu: (state, action) => {
      const { payload } = action;
      state.opened = payload.opened;
    }
  },
});

export const { openMenu, setMenu } = customizationSlicer.actions

export default customizationSlicer.reducer;