import OrderList from "@/components/OrderList";
import React from "react";

const Orders = async () => {
  const orders = await prisma.order.findMany({
    where: { isPaid: true },
    take: 10,
    skip: 0,
    include: { OrderItem: { include: { product: true } }, addressInfo: true },
  });
  console.log(orders, "orders");
  return <OrderList orders={orders} />;
};

export default Orders;
