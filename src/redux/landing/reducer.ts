import { createSlice } from "@reduxjs/toolkit";

const landingSlice = createSlice({
  name: "Landing",
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

const { incremented, decremented } = landingSlice.actions;
const { reducer } = landingSlice;

export { incremented, decremented, reducer };
