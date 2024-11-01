import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SignInStart: (state) => {
            state.loading = true;
        },
        SignInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        SignInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { SignInStart, SignInSuccess, SignInFailure } = userSlice.actions;
export default userSlice.reducer;