import { useState, useEffect } from "react";

import Calculator from "./components/Calculator/Calculator";
import Currencies from "./components/Currencies/Currencies";
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import iconsURI from "./utils/icons";

import classes from "./App.module.scss";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCurrenciesData = async () => {
      const baseURL =
        "https://api.nbp.pl/api/exchangerates/tables/C?format=json";

      try {
        const res = await fetch(baseURL);
        const data = await res.json();

        const currencies = data[0].rates
          .slice(0, data[0].rates.length - 1)
          .map((currency) => {
            return { ...currency, iconURI: iconsURI[currency.code] };
          });

        setCurrencies(currencies);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchCurrenciesData();
  }, []);

  const loadedContent = (
    <>
      <div className={classes["calculator-heading"]}>
        <h3>Kalkulator walut</h3>
        <p>Przeliczaj ceny kupna i sprzedaży</p>
      </div>
      <Calculator currencies={currencies} />
      <div className={classes["cards-container"]}>
        <p className={classes["cards-container__info"]}>
          Przeglądaj najświeższe kursy walut
        </p>
        <Currencies currencies={currencies} />
      </div>
    </>
  );

  return (
    <>
      <Header />
      {error && <p className={classes.error}>Błąd pobierania danych z serwera</p>}
      {isLoading && <Spinner />}
      {!error && !isLoading && loadedContent}
    </>
  );
};

export default App;
