import Fashsales from "@/components/Fashsales";
import prisma from "@/utils/connection";
import React from "react";

const WishlistPage = async () => {
  const [wishlist, popularProducts] = await prisma?.$transaction([
    prisma.favorite.findMany({
      include: { product: true },
    }),
    prisma.product.findMany({ take: 6, skip: 0, orderBy: { views: "desc" } }),
  ]);
  console.log(wishlist);
  return (
    <div className="px-[10%]">
      <Fashsales
        title="Wishlist"
        heading="Your all favorite products"
        products={wishlist}
      />
      <Fashsales
        title="Popular products"
        heading="Most popular products"
        products={popularProducts}
      />
    </div>
  );
};

export default WishlistPage;
