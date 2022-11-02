import React from "react";
import axios from "axios";
import ProductList from "../components/ProductList/ProductList";
import { Motorcycle } from "../types/Motorcycle";

const Home = ({ products }: { products: Motorcycle[] }) => {
  return <ProductList products={products}></ProductList>;
};

export async function getStaticProps() {
  const config = {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
    },
  };
  try {
    const requestMotorctycleList = await axios.get<{
      Motorcycle: Motorcycle[];
    }>(
      "https://nathan-dev.simplitec.io/webhook/simplimuv/products/motorcycles",
      config
    );
    const products = requestMotorctycleList.data;
    return { props: { products } };
  } catch (error) {
    console.log(error);
  }
}

export default Home;
