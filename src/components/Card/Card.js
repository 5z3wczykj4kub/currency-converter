import React from "react";

import classes from "./Card.module.scss";

const Card = ({ currency, loading }) => {
  const card = (
    <div className={classes.card}>
      <img src={currency.iconURI} alt="country icon" />
      <div className={classes["currency-info"]}>
        <p>{currency.code}</p>
        <p>{currency.currency}</p>
      </div>
      <div className={classes["currency-prices"]}>
        <p>Kupno: {currency.bid.toLocaleString()}</p>
        <p>Sprzedaż: {currency.ask.toLocaleString()}</p>
      </div>
    </div>
  );

  return <>{card}</>;
};

export default Card;
