import { createSlice } from "@reduxjs/toolkit";

export interface iUiState {
  adminDrawerOpen: boolean;
}

const initialState: iUiState = {
  adminDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAdminDrawer: (state) => {
      state.adminDrawerOpen = !state.adminDrawerOpen;
    },
  },
});

export const { toggleAdminDrawer } = uiSlice.actions;

export default uiSlice.reducer;
