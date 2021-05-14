import { useState } from "react";
import { CgArrowsExchangeV } from "react-icons/cg";

import CurrencyInput from "../CurrencyInput/CurrencyInput";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import iconsURI from "../../utils/icons";

import classes from "./Calculator.module.scss";

const Calculator = (props) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(props.currencies[3]);
  const [firstInputValue, setFirstInputValue] = useState("");
  const [isBuying, setIsBuying] = useState(true);

  const getFirstInputValueHandler = (e) => {
    setFirstInputValue(e.target.value);
  };

  const openSelectHandler = () => {
    document.body.style.overflow = "hidden";
    setIsSelectOpen(true);
  };

  const closeSelectHandler = () => {
    document.body.style.overflow = "visible";
    setIsSelectOpen(false);
  };

  const selectCurrencyHandler = (currency) => {
    setSelectedCurrency(currency);
    setIsSelectOpen(false);
  };

  const switchToBuyingOrSellingMode = () => {
    setIsBuying((prevState) => setIsBuying(!prevState));
  };

  const buyingSetup = (
    <>
      <CurrencyInput
        currencyInfo={{ code: "PLN", currency: "złoty", iconURI: iconsURI.PLN }}
        getFirstInputValue={getFirstInputValueHandler}
        value={firstInputValue}
      />
      <CurrencyInput
        currencyInfo={selectedCurrency}
        openSelect={openSelectHandler}
        value={(+firstInputValue / selectedCurrency.ask).toFixed(2)}
        readOnly={true}
      />
    </>
  );

  const sellingSetup = (
    <>
      <CurrencyInput
        currencyInfo={selectedCurrency}
        openSelect={openSelectHandler}
        getFirstInputValue={getFirstInputValueHandler}
        value={firstInputValue}
      />
      <CurrencyInput
        currencyInfo={{ code: "PLN", currency: "złoty", iconURI: iconsURI.PLN }}
        value={(+firstInputValue * selectedCurrency.bid).toFixed(2)}
        readOnly={true}
      />
    </>
  );

  return (
    <div className={classes.calculator}>
      {isBuying ? buyingSetup : sellingSetup}
      <span className={classes.arrows} onClick={switchToBuyingOrSellingMode}>
        <CgArrowsExchangeV />
      </span>
      <CurrencySelect
        currencies={props.currencies}
        isSelectOpen={isSelectOpen}
        closeSelect={closeSelectHandler}
        selectCurrency={selectCurrencyHandler}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
};

export default Calculator;
