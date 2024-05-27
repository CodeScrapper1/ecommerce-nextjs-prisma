import ProductList from "@/components/ProductList";
import prisma from "@/utils/connection";
import React from "react";

const Products = async () => {
  const query = {
    take: 10,
    skip: 0,
  };

  const prodList = await prisma.product.findMany(query);

  return (
    <div className="w-full flex flex-col min-h-screen mx-2 md:mx-12">
      <ProductList prodList={prodList} />
    </div>
  );
};

export default Products;
