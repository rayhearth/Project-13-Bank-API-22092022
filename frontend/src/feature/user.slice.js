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
    isLoged: (state, action) => {
      state.isAuthentificated = action.payload.isAuthentificated;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload;
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



export const { setUserData, setLogin } = usersSlice.actions;
export default usersSlice.reducer;