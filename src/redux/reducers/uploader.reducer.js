import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUploading: false,
  items: [],
}

export const uploadSlice = createSlice({
  name: 'uploader',
  initialState,
  reducers: {
    showModal: (state, action) => {
      const { payload } = action;
      state.canShow = true;
      state.size = payload.size || initialState.size;
      state.title = payload.title || initialState.title;
      state.child = payload.child || initialState.child;
    },
    hideModal: (state) => Object.assign(state, initialState)
  },
})

export const { showModal, hideModal } = uploadSlice.actions

export const modalState = (state) => state.modal;

export default uploadSlice.reducer;