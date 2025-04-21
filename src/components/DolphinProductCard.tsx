"use client";

import { useState } from "react";

export default function DolphinProductSpotlight() {

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-evenly gap-8 p-8 md:py-20 py-12 bg-gray-50">
      <div className="w-full md:max-w-[445px]">
        <img
          src="/IMG-20250310-WA0176.jpg"
          alt="The Dolphin Pill Organizer"
          className="w-full rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-6 max-w-xl">
        <h2 className="text-4xl font-bold text-gray-800">Pill catcher  (pack of 10)</h2>
        <p className="text-xl text-gray-600">
          Effortless Pill Access with a Simple Flip.
        </p>

        <ul className="text-gray-700 space-y-1">
          <li>✅ Quick & easy pill access</li>
          <li>✅ No more struggling with bottles</li>
          <li>✅ Ideal for seniors & motor difficulties</li>
          <li>✅ Affordable & practical</li>
        </ul>

        {/* Quantity and Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 text-lg font-bold"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 text-lg font-bold"
            >
              +
            </button>
          </div>

<a href={`/checkout?quantity=${quantity}`}>
          <button
            className="px-6 py-3 bg-black rounded-md text-white"
          >
            Buy Now
          </button>
</a>
        </div>
      </div>
    </section>
  );
}
