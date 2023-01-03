import {createSlice} from "@reduxjs/toolkit";
// import type {PayloadAction} from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: state => {
      state.isLoggedIn = true;
    },
    signOut: state => {
      state.isLoggedIn = false;
    }
  }
});

export const {signIn, signOut} = authSlice.actions;

export default authSlice.reducer;
