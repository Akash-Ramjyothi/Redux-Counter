import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
  showCounter: boolean;
}

const initialCounterState: CounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,

  reducers: {
    increment(state) {
      state.counter += 1;
    },

    decrement(state) {
      state.counter -= 1;
    },

    increase(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },

    reset(state) {
      state.counter = 0;
      state.showCounter = true;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
