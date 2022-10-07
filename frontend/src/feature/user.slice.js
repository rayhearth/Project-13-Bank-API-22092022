import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfos",
  initialState: {
    userInfos: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    firstName: '',
    lastName: '',
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.userInfos = payload;
    }
  }
})



export const { setUserData } = userSlice.actions;
export default userSlice.reducer;