import Fashsales from "@/components/Fashsales";
import prisma from "@/utils/connection";
import React from "react";

const Products = async ({ searchParams }) => {
  let result;
  if (searchParams.cat) {
    result = await prisma.product.findMany({
      where: { categoryId: searchParams.cat },
    });
  } else {
    result = await prisma.product.findMany();
  }
  console.log(result);
  return (
    <div className="px-[10%]">
      <Fashsales
        title="Products By Category"
        heading="Explore Our Products"
        products={result}
      />
    </div>
  );
};

export default Products;
