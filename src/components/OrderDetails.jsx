import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImageList from "./ImageList";

const OrderDetails = ({ children, orderItems }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{children}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {orderItems?.length
          ? orderItems?.map((item) => (
              <div className="grid grid-cols-[1fr_2fr]">
                <ImageList images={item?.product?.images} />
                <div className="p-2 flex flex-col justify-center">
                  <div className="flex justify-between items-center">
                    <p className="font-bold capitalize">
                      {item?.product?.name}
                    </p>
                    <p className="text-red-600">
                      <span className="text-black">Rs-</span>
                      {item?.product?.price}
                    </p>
                  </div>
                  <p>{item?.product?.description}</p>
                </div>
              </div>
            ))
          : null}
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetails;
