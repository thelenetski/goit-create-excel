import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './operations';

const handleRejected = state => {
  state.loading = {
    signUp: false,
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    loading: {
      signUp: false,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.loading.signUp = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = { displayName: action.payload.displayName };
        state.token = action.payload.token;
        state.loading.signUp = false;
      })
      .addCase(signUp.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
