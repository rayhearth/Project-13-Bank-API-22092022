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
      state.isAuthentificated = !payload.isAuthentificated;
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.token = payload.token
    },
    updateData: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
  }
})



export const { isConnected, updateData } = usersSlice.actions
export default usersSlice.reducer