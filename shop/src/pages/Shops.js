import React from "react";
import {
  carry,
  twinz,
  coffeeBean,
  starsCoffee,
} from "../assets";
import ShopsCard from "../components/ShopsCard";
import BannerCoffee from "../components/BannerCoffee";

export const Shops = (index) => {
  return (
    <div>
      <BannerCoffee />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ShopsCard
            subtitle="Coffee Shop"
            title="Twinz Coffee"
            img={twinz}
            link="https://twinzcoffee.ru/"
            description="This is the best coffee shop"
          />
          <ShopsCard
            subtitle="Coffee Shop"
            title="Coffee Bean"
            img={coffeeBean}
            link="https://coffeebean.ru/adresa/samara-leningradskaia/"
            description="This is the best coffee shop"
          />
          <ShopsCard
            subtitle="Coffee Shop"
            title="Carrie Samara"
            img={carry}
            link="https://polyana.co/restaurant/%D0%BA%D1%8D%D1%80%D1%80%D0%B8/"
            description="This is the best coffee shop"
          />
          <ShopsCard
            subtitle="Coffee Shop"
            title="Stars Coffee"
            img={starsCoffee}
            link="https://stars-coffee.ru/"
            description="This is the best coffee shop"
          />
        </div>
      </div>
    </div>
  );
};

export default Shops;
