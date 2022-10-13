import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "usersInfos",
  initialState: {
    userInfos: null,
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.userInfos = payload;
    }
  }
})



export const { setUserData } = usersSlice.actions;
export default usersSlice.reducer;