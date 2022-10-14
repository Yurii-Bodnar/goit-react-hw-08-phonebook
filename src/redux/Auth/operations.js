import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  logInApi,
  logOutApi,
  registerApi,
} from 'sevices/authApi';

export const register = createAsyncThunk(
  '/users/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await registerApi(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await logInApi(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    const data = await logOutApi();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const res = await getCurrentUser(persistedToken,state);
    //   return res.data;
    return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
