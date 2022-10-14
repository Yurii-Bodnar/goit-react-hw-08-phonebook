import { logIn, logOut, refreshUser, register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error:null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected](state,{payload}){
        state.isLoading = false;
        state.error = payload
    },
    [logIn.pending](state) {
        state.isLoading = true;
      },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected](state,{payload}){
        state.isLoading = false;
        state.error = payload
    },
    [logOut.pending](state) {
        state.isLoading = true;
      },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected](state,{payload}){
        state.isLoading = false;
        state.error = payload
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isLoading = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      state.isLoading = false;
    },
  },
});
export const authReducer = authSlice.reducer;
