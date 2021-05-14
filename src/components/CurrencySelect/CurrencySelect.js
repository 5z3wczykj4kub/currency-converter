import classes from "./CurrencySelect.module.scss";

const CurrencySelect = (props) => {
  const currencyOption = (
    <div
      className={`${classes["currency-select"]} ${
        !props.isSelectOpen ? classes.hidden : ""
      }`}
    >
      {props.currencies.map((currency) => {
        return (
          <div
            className={`${classes.option} ${
              props.selectedCurrency.code === currency.code
                ? classes.selected
                : ""
            }`}
            key={currency.code}
            onClick={() => props.selectCurrency(currency)}
          >
            <div className={classes.wrapper}>
              <div className={classes.icon}>
                <img src={currency.iconURI} alt="country flag icon" />
              </div>
              <div className={classes.code}>
                <span>{currency.code}</span>
              </div>
              <div className={classes.currency}>
                <span>{currency.currency}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {currencyOption}
      {props.isSelectOpen && (
        <div className={classes.backdrop} onClick={props.closeSelect}></div>
      )}
    </>
  );
};

export default CurrencySelect;
