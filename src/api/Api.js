import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products",
  );

  return products;
}

export async function techsData() {
  const techs = await axios.get(
    "https://fakestoreapiserver.reactbd.com/nextamazon",
  );

  return techs;
}
