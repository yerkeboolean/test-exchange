import { CurrencyModel } from "../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialTodoState: CurrencyModel = {
  all_currencies: [],
  baseCurrencies: [],
  baseCurrency: "",
  resultConvertion: {},
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialTodoState,
  reducers: {
    setAllCurrencies(state, action: PayloadAction<any>) {
      if (action.payload?.success) {
        const entries = Object.entries(action.payload?.symbols);
        state.all_currencies = entries;
      }
    },
    setCurrenciesToBase(state, action: PayloadAction<any>) {
      if (action.payload?.success) {
        const entries = Object.entries(action.payload?.rates);
        state.baseCurrencies = entries;
        state.baseCurrency = action.payload?.base;
      }
    },
    setConversion(state, action: PayloadAction<any>) {
      if (action.payload?.success) {
        const response = action.payload;
        state.resultConvertion = {
          from: response.query.from,
          to: response.query.to,
          amount: response.query.amount,
          result: response.result.toFixed(2)
        };
      }
    },
    clearConversionResult(state){
      state.resultConvertion = {}
    }
  },
});
export default currencySlice;
