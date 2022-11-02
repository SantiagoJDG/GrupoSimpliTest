import React from "react";
import axios from "axios";
import DetailView from "../../components/DetailView/DetailView";

const ProductDetail = ({ detail }: { detail: any }) => {
  return <DetailView detail={detail}></DetailView>;
};

export async function getStaticPaths() {
  const config = {
    headers: {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
    },
  };
  const requestMotorctycleList = await axios.get(
    `https://nathan-dev.simplitec.io/webhook/simplimuv/products/motorcycles`,
    config
  );
  const products = requestMotorctycleList.data;
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
    const requestMotorctycleList = await axios.get(
      `https://nathan-dev.simplitec.io/webhook/simplimuv/products/motorcycles?uuid=${params.id}`,
      config
    );
    const [detail] = requestMotorctycleList.data;
    if (!detail) {
      throw new Error("Error");
    }
    return { props: { detail } };
  } catch (error) {
    console.log(error);
  }
};
export default ProductDetail;
