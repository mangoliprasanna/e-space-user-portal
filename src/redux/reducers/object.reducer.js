import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rawData: {},
}

export const objectSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {
    objectAppend: (state, action) => {
      const { payload } = action;
      Object.keys(payload).forEach((key) => {
        state.rawData[key] = payload[key];
      });
    },
    objectPop: (state, action) => {
      const { payload } = action;
      delete state.rawData[payload];
    }
  },
})

export const { objectAppend, objectPop } = objectSlice.actions

export const objectByCode = (code, state) => state.objects.rawData[code];

export default objectSlice.reducer;