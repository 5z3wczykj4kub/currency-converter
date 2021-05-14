import { IoIosArrowDown } from "react-icons/io";

import classes from "./CurrencyInput.module.scss";

const CurrencyInput = (props) => {
  return (
    <div className={classes["currency-input"]}>
      <div
        className={classes["currency-input__currency"]}
        onClick={props.openSelect}
        style={{
          cursor: props.currencyInfo.code !== "PLN" ? "pointer" : "default"
        }}
      >
        <img src={props.currencyInfo.iconURI} alt="country flag icon" />
        <p>{props.currencyInfo.code}</p>
        {props.currencyInfo.code !== "PLN" && <IoIosArrowDown />}
      </div>
      <input
        className={classes["currency-input__input"]}
        type="number"
        readOnly={props.readOnly}
        value={props.value}
        onChange={props.getFirstInputValue}
      />
    </div>
  );
};

export default CurrencyInput;
