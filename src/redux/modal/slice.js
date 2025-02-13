import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp } from '../auth/operations';

export const modalTypes = {
  register: 'registration',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    type: null,
    content: null,
  },
  reducers: {
    openRegistration(state, action) {
      state.isOpen = true;
      state.type = modalTypes.register;
      state.content = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.type = null;
      state.content = null;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(signUp.fulfilled), state => {
      state.isOpen = false;
      state.type = null;
      state.content = null;
    });
  },
});

// Експортуємо генератори екшенів та редюсер
export const { openRegistration, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
