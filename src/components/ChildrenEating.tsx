import React, { useRef } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const images = ['/1.png', '/2.png'];

const ChildrenEating = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    duration: 800,
    dragSpeed: 1.5,
    slides: {
      perView: 1,
    },
    autoplay: {
      delay: 3000,
    },
  })

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-6">
      {/* Carousel */}
      <div
  ref={sliderRef}
  className="keen-slider relative w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg bg-black"
>
  {images.map((image, index) => (
    <div key={index} className="keen-slider__slide flex items-center justify-center">
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className="max-w-full max-h-72 object-contain"
      />
    </div>
  ))}
</div>


      {/* Text Box */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          A Pill Catcher Helps Prevent Children or Pets from Swallowing Dropped Pills
        </h2>
        <p className="text-gray-600">
          Accidental spills happen — but with a pill catcher, you can quickly and safely retrieve any lost medication, reducing the risk of children or pets finding and swallowing it. It’s a simple tool that adds an extra layer of safety to your home.
        </p>
      </div>
    </div>
  );
};

export default ChildrenEating;
