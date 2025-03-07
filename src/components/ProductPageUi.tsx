"use client";

import { useState } from "react";

const ProductPageUi= () => {
  const [quantity, setQuantity] = useState<number>(1);

  const updateQuantity = (qnty: number = 1, action?: "increment" | "decrement") => {
    setQuantity((prevQuantity) => {
      if (action === "increment") {
        return prevQuantity + qnty;
      } else if (action === "decrement" && prevQuantity > 1) {
        return Math.max(prevQuantity - qnty, 1);
      } else {
        return Math.max(qnty, 1);
      }
    });
  };

  return (
    <div className="details-section flex flex-col pt-6 text-left gap-3 w-full md:w-1/2 px-6">
      <div className="product-product flex flex-col md:gap-6 gap-3 md:pb-8 py-4">
        <div className="flex flex-col gap-4">
          <p className="capitalize">Just Close, Flip, Open, and Pick – It’s That Easy!</p>
          <h1 className="product-title text-3xl tracking-wide font-bold text-left uppercase">
            PillCatcher (pack of 10)
          </h1>
        </div>
        <div className="flex items-end gap-3">
          <div className="flex gap-4 md:p-0 pt-3">
            <h3 className="product-price text-2xl text-brandRed font-medium tracking-wide">
              $ 9.99
            </h3>
          </div>
          <div>
            <div>
              $<s className="line-through">20</s>
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold">Quantity</p>
      <form className="max-w-xs md:p-2 flex justify-left items-start">
        <div className="relative flex items-start max-w-[8rem]">
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200   border border-gray-300 rounded-l-lg p-3 h-11"
            onClick={() => updateQuantity(1, "decrement")}
          >
            -
          </button>
          <input
            type="number"
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center w-full py-2.5"
            value={quantity}
            required
            onChange={(e) => updateQuantity(Number(e.target.value))}
          />
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11"
            onClick={() => updateQuantity(1, "increment")}
          >
            +
          </button>
        </div>
      </form>
      <div className="cta-con pt-8">
        <div className="two_btn_con flex gap-4 items-center mb-4 md:flex-row flex-row-reverse md:w-[80%]">
          <a
            href={`/checkout?quantity=${quantity}`}
            className="w-full"
          >
            <button className="w-full py-3.5 text-lg bg-black rounded-lg text-white">Buy now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPageUi;
