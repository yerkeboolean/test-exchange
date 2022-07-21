// + get list of currencies by default currency
// + formula n = 1 / currencyRate;
// + styling screen
// - adding types

import { useEffect } from "react";
import { fetchCurrenciesToBase } from "../../redux/store/currency-actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const CurrencyScreen = () => {
  const dispatch = useAppDispatch();

  const baseCurrency = useAppSelector((state) => state.currency.baseCurrency);
  const baseCurrencies = useAppSelector(
    (state) => state.currency.baseCurrencies
  );

  useEffect(() => {
    dispatch(fetchCurrenciesToBase());
  }, [false]);

  return (
    <div>
      {!localStorage.getItem("defaultCurrency") ? (
        <div>Please select your currency on top menu bar</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Currency</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {baseCurrencies.map((item: any, index: number) => (
              <tr key={index}>
                <th scope="row">1 {item[0]}</th>
                <td>
                  {(1 / item[1]).toFixed(5)} {baseCurrency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default CurrencyScreen;
