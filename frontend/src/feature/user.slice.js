import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthentificated: false,
    email: null,
    firstname: null,
    lastname: null,
    token: null,
  },
  reducers: {
    isLoged: (state, { payload }) => {
      state.isAuthentificated = true;
      state.email = payload.email;
      state.firstname = payload.firstname;
      state.lastname = payload.lastname;
      state.token = payload.token
    }

    /*const authSlice = createSlice({
  name: "authentification",
  initialState: {
    isAuthentificated: false,
    email: null,
    firstname: null,
    lastname: null,
    token: null,
  },
  reducers: {
    isLoggedIn: (state, action) => {
      state.isAuthentificated = action.payload.isAuthentificated;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.*/
  }
})



export const { isLoged } = usersSlice.actions;
export default usersSlice.reducer;