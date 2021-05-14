import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";

import Card from "../Card/Card";

SwiperCore.use([Pagination]);

const Currencies = ({ currencies }) => {
  const currenciesList = (
    <>
      {currencies.map((currency) => (
        <SwiperSlide key={currency.code}>
          <Card currency={currency} />
        </SwiperSlide>
      ))}
    </>
  );

  const breakpoints = {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  };

  return (
    <>
      <Swiper breakpoints={breakpoints} pagination={true}>
        {currencies.length > 0 ? currenciesList : <Card />}
      </Swiper>
    </>
  );
};

export default Currencies;
