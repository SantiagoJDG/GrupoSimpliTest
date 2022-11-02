import React from "react";
import axios from "axios";
import { Accesory } from "../types/Accesory";
import AccesoryList from "../components/AccesoriesList/AccesoriesList";

const AccesoriesView = ({ products }: { products: Accesory[] }) => {
  return <AccesoryList products={products}></AccesoryList>;
};

export async function getStaticProps() {
  const config = {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
    },
  };
  try {
    const requestAccesoriesList = await axios.get<{
      Accesory: Accesory[];
    }>(
      "https://nathan-dev.simplitec.io/webhook/simplimuv/products/accesories",
      config
    );
    const products = requestAccesoriesList.data;
    return { props: { products } };
  } catch (error) {
    console.log(error);
  }
}

export default AccesoriesView;
