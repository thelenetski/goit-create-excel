import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://example.com/';

// Регистрация
export const signUp = createAsyncThunk('auth/signup', async (_, thunkAPI) => {
  try {
    const res = await axios.post('register');
    return res.data;
  } catch (error) {
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue(error.message || 'Unknown error');
  }
});
