import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface TimerState {
  seconds: number;
  mode: "choose" | "timer" | "success";
}

const initialState: TimerState = {
  seconds: 0,
  mode: "choose",
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<typeof state.mode>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = timerSlice.actions;

export const selectCount = (state: RootState) => state.timer.seconds;

export default timerSlice.reducer;
