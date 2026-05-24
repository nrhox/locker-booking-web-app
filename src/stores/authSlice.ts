import type { User } from "@/types/auth";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  user: User | null;
  status: "authorized" | "loading" | "unauthorized";
}

const initState: IAuthState = {
  user: null,
  status: "loading",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setAuth: (state, action: PayloadAction<User>) => {
      state.status = "authorized";
      state.user = action.payload;
    },
    setLogOut: (state) => {
      state.status = "unauthorized";
      state.user = null;
    },
  },
});

export const { setAuth, setLogOut } = authSlice.actions;

export default authSlice.reducer;
