import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export function incrementAsync() {
  return async (dispatch, getState) => {
    console.log(getState());
    setTimeout(() => {
      dispatch(incrementByAmount(10))
    }, 1000)
  }
}

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer