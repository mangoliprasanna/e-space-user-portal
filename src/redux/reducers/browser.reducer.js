import { createSlice } from '@reduxjs/toolkit'
import { BrowserService } from '../../services/browser.service'

const initialState = {
  key: 'root',
  folders: [],
  files: [],
  isLoading: true,
  hasError: false,
  isEmpty: true,
  selectedItem: null,
}

export const browserSlice = createSlice({
  name: 'browser',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setContent: (state, action) => {
      const { payload } = action;
      state.files = payload.files;
      state.folders = payload.folders;
      state.key = payload.key;
      state.hasError = false;
      state.isLoading = false;
      state.isEmpty = payload.files.length === 0 && payload.folders.length === 0
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setError: (state, action) => {
      state.hasError = true;
      state.isLoading = false;
    }
  },
})

export const { setContent, setLoading, setSelectedItem, setError } = browserSlice.actions

export function browse(key) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
    const response = await BrowserService.browse(key);
    dispatch(setContent(response));
    } catch(e) {
      dispatch(setError(true));
    }
  }
}

export default browserSlice.reducer;