import { configureStore } from '@reduxjs/toolkit';
import produitReducer from './produitSlice';

export const store = configureStore({
  reducer: {
    products: produitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
