import Carousels from "@/components/Carousels";
import CategoryList from "@/components/CategoryList";
import Enhancement from "@/components/Enhancement";
import Fashsales from "@/components/Fashsales";
import Featured from "@/components/Featured";
import { Separator } from "@/components/ui/separator";
import prisma from "@/utils/connection";

export default async function Home() {
  const query = {
    take: 6,
    skip: 0,
  };
  const [products, popularProducts, categories] = await prisma?.$transaction([
    prisma.product.findMany(query),
    prisma.product.findMany({ ...query, orderBy: { views: "desc" } }),
    prisma.category.findMany(query),
  ]);
  return (
    <div className="">
      <Carousels />
      <div className="px-[10%]">
        <Fashsales title="Today's" heading="Flash sales" products={products} />
        <Separator className="my-4" />
        <CategoryList categories={categories} />
        <Enhancement />
        <Separator className="my-4" />
        <Fashsales
          title="Our Products"
          heading="Explore Our Products"
          products={popularProducts}
        />
        <Featured />
      </div>
    </div>
  );
}
