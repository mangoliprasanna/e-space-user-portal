import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  size: '',
  title: '',
  contentText: '',
  content: null,
  action: null,
  onClose: null,
  fullWidth: null,
  maxWidth: null,
}

export const dialogSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    shodwDialog: (state, action) => {
      const { payload } = action;
      state.open = payload.open;
      state.size = payload.size;
      state.title = payload.title;
      state.contentText = payload.contentText;
      state.content = payload.content;
      state.action = payload.action;
      state.onClose = payload.onClose;
      state.fullWidth = payload.fullWidth;
      state.maxWidth = payload.maxWidth;
    },
    hideDialog: (state) => {
      state.open = false;
      setTimeout(() => {
        Object.assign(state, initialState);
      }, 2000);
    },
  },
})

export const { shodwDialog, hideDialog } = dialogSlice.actions

export const dialogState = (state) => state.modal;

export default dialogSlice.reducer;