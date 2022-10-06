import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
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

    }
})


export const { setPicturesData, addPicture, editPicture, deletePicture } =
  .actions;
export default picturesSlice.reducer;