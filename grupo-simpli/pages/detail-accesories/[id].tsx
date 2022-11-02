import React from "react";
import axios from "axios";
import DetailView from "../../components/DetailView/DetailView";
import { Motorcycle } from "../../types/Motorcycle";

const ProductDetail = ({ detail }: { detail: any }) => {
  return <DetailView detail={detail}></DetailView>;
};

export async function getStaticPaths() {
  const config = {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
    },
  };
  const requestAccesoriesList = await axios.get(
    `https://nathan-dev.simplitec.io/webhook/simplimuv/products/accesories`,
    config
  );
  const products = requestAccesoriesList.data;
  const paths = products.map((product: any) => ({
    params: {
      id: product.uuid,
    },
  }));
  return {
    paths: [...paths],
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const config = {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
    },
  };
  try {
    const requestAccesoriesList = await axios.get(
      `https://nathan-dev.simplitec.io/webhook/simplimuv/products/accesories?uuid=${params.id}`,
      config
    );
    const [detail] = requestAccesoriesList.data;
    if (!detail) {
      throw new Error("Error");
    }
    return { props: { detail } };
  } catch (error) {
    console.log(error);
  }
};
export default ProductDetail;
