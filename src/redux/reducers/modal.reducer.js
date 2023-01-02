import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  canShow: false,
  size: '',
  title: 'Modal',
  child: <>I am modal</>,
}

export const modalSlice = createSlice({
  name: 'modal',
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

export const { showModal, hideModal } = modalSlice.actions

export const modalState = (state) => state.modal;

export default modalSlice.reducer;