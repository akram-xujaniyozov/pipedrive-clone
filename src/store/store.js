import { configureStore } from '@reduxjs/toolkit';
import modalJob from './modalJob';
import createJob from './createJob';

export const store = configureStore({
  reducer: {
    modal: modalJob,
    jobData: createJob,
  },
});
