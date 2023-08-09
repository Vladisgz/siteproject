import React from "react";
// import Title from "./Title";
import { carry, twinz, coffeeBean, starsCoffee } from "../assets";
import ShopsCard from "../components/ShopsCard";
import BannerCoffee from "../components/BannerCoffee";
// import {TbCircleLetterG} from 'react-icons/tb'

export const Shops = (index) => {
  return (
    <div>
      <BannerCoffee />
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
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

      {/* <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        <ShopsCard
          title="Twinz Coffee"
          img={twinz}
          link="https://twinzcoffee.ru/"
        />
        <ShopsCard
          title="Coffee Bean"
          img={coffeeBean}
          link="https://coffeebean.ru/adresa/samara-leningradskaia/"
        />
        <ShopsCard
          title="Stars Coffee"
          img={starsCoffee}
          link="https://stars-coffee.ru/"
        />
        <ShopsCard
          title="Carrie Samara"
          img={carry}
          link="https://polyana.co/restaurant/%D0%BA%D1%8D%D1%80%D1%80%D0%B8/"
        />
      </div> */}
    </div>
  );
};

export default Shops;
