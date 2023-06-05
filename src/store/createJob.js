import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobDatas: {},
};

const createJobSlice = createSlice({
  name: 'createJob',
  initialState,
  reducers: {
    collectData: (state, action) => {
      state.jobDatas = action.payload;
    },
  },
});

export const { collectData } = createJobSlice.actions;

export default createJobSlice.reducer;
