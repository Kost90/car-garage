import { configureStore } from '@reduxjs/toolkit';
import garageReducer from './garageSlice';

export const store = configureStore({
  reducer: {
    garage: garageReducer,
  },
});
