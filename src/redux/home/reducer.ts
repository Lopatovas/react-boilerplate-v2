import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'Home',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

const { incremented, decremented } = homeSlice.actions;
const { reducer } = homeSlice;

export { incremented, decremented, reducer };
