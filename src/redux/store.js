import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './modal/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
});
