"use client";
import AddAddress from "@/components/AddAddress";
import { setCart } from "@/redux/slice/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Addtocart = () => {
  const { cart } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    const updateCart = cart.filter((item) => item.product.id !== id);
    dispatch(setCart(updateCart));
  };

  const updateQuantity = (id, qty) => {
    const update = cart.map((item) => {
      if (item.product.id === id) {
        return { ...item, quantity: qty };
      }
      return item;
    });
    dispatch(setCart(update));
  };
  const totalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white p-10">
          <div className="flex justify-between border-b pb-8 font-semibold text-2xl">
            <h1>Shopping cart</h1>
            <h2>{cart?.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5 ">
            <h3 className="font-semibold text-center text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-xs uppercase w-2/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-xs uppercase w-2/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-xs uppercase w-2/5">
              Total
            </h3>
          </div>
          {cart?.map((item, index) => (
            <div
              key={index}
              className="flex items-center hover:bg-gray-100 px-6 py-5"
            >
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24"
                    src={item?.product?.images?.[0]}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">
                    {item?.product.name}
                  </span>
                  <span className="text-red-500 text-xs">Apple</span>
                  <span
                    className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs"
                    onClick={() => removeItem(item.product.id)}
                  >
                    Remove
                  </span>
                </div>
              </div>
              <div className="flex justify-center  w-1/5">
                <input
                  type="text"
                  className="mx-2 border text-center"
                  value={item.quantity}
                  onChange={(event) =>
                    updateQuantity(
                      item.product.id,
                      parseInt(event.target.value)
                    )
                  }
                />
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${item.product.price}
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${item.product.price * item.quantity}
              </span>
            </div>
          ))}
        </div>
        <div>
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase ">
              Items {cart?.length}
            </span>
            <span className="font-semibold text-sm">{totalPrice()}$</span>
          </div>
          <div>
            <span className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </span>
            <select className="block p-2 text-gray-600 w-full text-sm" id="">
              <option value="Standard shipping - $10.00"></option>
            </select>
          </div>
          <div>
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total Cost</span>
              <span>${totalPrice() + 10}</span>
            </div>
            <div className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-sm text-white uppercase w-full p-2 rounded-md">
              <AddAddress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
