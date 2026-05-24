import authSliceReducer from "@/stores/authSlice";
import uiSliceReducer from "@/stores/uiSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    auth: authSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
