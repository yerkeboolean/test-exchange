import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  fetchCurrencies,
  fetchCurrenciesToBase,
} from "../../redux/store/currency-actions";

import "./style.css";

// + add styling to navigation
// + add bootstrap ?
// + get all currencies from redux
// + set and get(localstore) default currency of user

const Layout = () => {
  const dispatch = useAppDispatch();
  const [defaultCurrency, setDefaultCurrency] = useState<string>("");

  const allcurrencies = useAppSelector(
    (state) => state.currency.all_currencies
  );

  useEffect(() => {
    dispatch(fetchCurrencies());
    setDefaultCurrency(localStorage.getItem("defaultCurrency")!);
  }, [false]);

  const handleDefaultCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!!event.target.value) {
      localStorage.setItem("defaultCurrency", event.target.value);
      dispatch(fetchCurrenciesToBase());
      setDefaultCurrency(localStorage.getItem("defaultCurrency")!);
    } else {
      localStorage.removeItem("defaultCurrency");
      setDefaultCurrency("");
    }
  };

  return (
    <>
      <header className="layout_header">
        <div className="layout_header-left">
          <h1 className="layout_header-logotype">My currency app</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="currency">Currency</Link>
          </nav>
        </div>
        <select
          className="form-select layout_select"
          aria-label="Default select example"
          onChange={handleDefaultCurrencyChange}
          value={defaultCurrency}
        >
          <option value="">Open this select menu</option>
          {allcurrencies.map((item: any, index: number) => (
            <option key={index} value={item[0]}>
              {item[0]} {item[1]}
            </option>
          ))}
        </select>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
