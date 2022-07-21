import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currency-slice";

const store = configureStore({
  reducer: { currency: currencySlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
