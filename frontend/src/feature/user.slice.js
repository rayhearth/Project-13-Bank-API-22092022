import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
  name: "auth",
  initialState: {
    // user: null,
    isAuthentificated: false,
    email: null,
    firstName: null,
    lastName: null,
    token: null,
  },
  reducers: {
    isConnected: (state, { payload }) => {
      // state.user = payload
      state.isAuthentificated = true;
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
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



export const { isConnected } = usersSlice.actions
export default usersSlice.reducer