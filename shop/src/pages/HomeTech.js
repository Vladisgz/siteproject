// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Banner from "../components/Banner";
// import Techs from "../components/Techs";

// const HomeTech = () => {
//   // const [techs, setTechs] = useState([]);
//   const [products, setProducts] = useState([]);

//   const data = useLoaderData();

//   useEffect(() => {
//     setProducts(data.data);
//   }, [data]);

//   return (
//     <div>
//       <Banner />
//       <Techs product={products} />
//     </div>
//   );
// };

// export default HomeTech;

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
