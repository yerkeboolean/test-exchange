import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getConversionRate,
  clearConversionResult,
} from "../../redux/store/currency-actions";
import { CurrencyListItem } from "../../redux/models";

import "./style.css";
// + create input with state that get currency and check if input is not correct
// + make request to api and get response with right currency

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const resultConvertion = useAppSelector(
    (state) => state.currency.resultConvertion
  );
  const allcurrencies = useAppSelector(
    (state) => state.currency.all_currencies
  );
  const allcurrenciesCode = allcurrencies.map(
    (item: CurrencyListItem) => item[0]
  );

  const [inputState, setInputState] = useState<string[]>([]);
  const [errorList, setErrorList] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArr = e?.target?.value.split(" ");
    setInputState(newArr);
    setErrorList([]);
  };

  const handleConvertClick = () => {
    const errors: string[] = [];
    if (inputState.length !== 4 || inputState[2]?.toLowerCase() !== "to") {
      errors.push("Please use example '15 USD to EUR'");
    } else {
      if (typeof Number(inputState[0]) !== "number") {
        errors.push("First element is not number");
      }
      if (
        !allcurrenciesCode.includes(inputState[1]?.toUpperCase()) ||
        !allcurrenciesCode.includes(inputState[3].toUpperCase())
      ) {
        errors.push("Check currency symbols");
      }
    }
    setErrorList(errors);

    if (!errors.length) {
      dispatch(
        getConversionRate(Number(inputState[0]), inputState[1], inputState[3])
      );
    }
  };

  const handleClearButton = () => {
    dispatch(clearConversionResult());
  };

  return (
    <div>
      <p>
        <mark>"15 USD to EUR"</mark> use this example to convert
      </p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter exchange condition"
          aria-label="Enter exchange condition"
          aria-describedby="button-addon2"
          onChange={handleInput}
          onFocus={() => {
            setErrorList([]);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleConvertClick}
        >
          Convert
        </button>
      </div>
      <div>
        {errorList.map((item) => (
          <div className="home_error-item">{item}</div>
        ))}
      </div>
      {resultConvertion.result && (
        <div className="home_result">
          Result is:{" "}
          <h1 className="display-1">
            {resultConvertion.result} {resultConvertion.to}
          </h1>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClearButton}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
