import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './slices/inputsSlice';

const store = configureStore({
  reducer: {
    inputs: inputReducer,
  },
});

export default store;