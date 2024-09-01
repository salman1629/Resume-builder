import { configureStore } from '@reduxjs/toolkit';
import infoSlice from './infoSlice';
export const Store = configureStore({
  reducer: {
    info: infoSlice,
  },
});