import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BannerTech from "../components/BannerTech";
import Techs from "../components/Techs";

const Home = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <BannerTech />
      <Techs products={products} />
    </div>
  );
};

export default Home;
