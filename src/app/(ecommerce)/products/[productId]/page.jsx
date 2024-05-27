import AddToCart from "@/components/AddToCart";
import Favorite from "@/components/Favorite";
import ProductImages from "@/components/ProductImages";
import prisma from "@/utils/connection";
import React from "react";

const ProductId = async ({ params }) => {
  const product = await prisma.product.findUnique({
    where: { id: params.productId },
  });
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-7xl px-4 mx-auto py-6">
      <div className="grid md:grid-cols-5 gap-3 items-start">
        {product?.images?.length ? (
          <ProductImages images={product.images} />
        ) : null}
      </div>
      <div>
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl">{product?.name}</h1>
          <span className="text-2xl text-amber-400 mt-5">
            ${product?.price}
          </span>
          <p className="text-slate-400">{product?.description}</p>
        </div>
        <hr className="h-[1px] w-full bg-slate-400 mt-5" />
        <div className="mt-5 alert-dialog flex gap-2">
          <AddToCart product={product}>
            <div className="bg-red-600 text-white text-center text-sm p-2 cursor-pointer rounded-md w-full">
              Add to cart
            </div>
          </AddToCart>
          <Favorite />
        </div>
      </div>
    </div>
  );
};

export default ProductId;
