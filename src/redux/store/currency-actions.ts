import currencySlice from "./currency-slice";

import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import CurrencyService from "../../service/currencyService";

export const currencyActions = currencySlice.actions;

export const fetchCurrencies = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().currency.all_currencies.length === 0) {
      const response: any = await CurrencyService.getAllCurrencies();
      dispatch(currencyActions.setAllCurrencies(response));
    }
  };
};

export const fetchCurrenciesToBase = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (!!localStorage.getItem("defaultCurrency")) {
      const response: any = await CurrencyService.getCurrenciesToBase(
        localStorage.getItem("defaultCurrency")!
      );
      dispatch(currencyActions.setCurrenciesToBase(response));
    }
  };
};

export const getConversionRate = (
  convertAmount: number,
  convertFrom: string,
  convertTo: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: any = await CurrencyService.makeConvertions(
      convertAmount,
      convertFrom,
      convertTo
    );
    dispatch(currencyActions.setConversion(response));
  };
};

export const clearConversionResult = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    dispatch(currencyActions.clearConversionResult());
  };
};

// export const fetchParticularTodo = (
//   todo_id: number
// ): ThunkAction<void, RootState, unknown, AnyAction> => {
//   return async (dispatch, getState) => {
//     const response: TodoModel = await TodoService.getParticularTodo(todo_id);
//     dispatch(todoActions.setParticularTodo(response));
//   };
// };
