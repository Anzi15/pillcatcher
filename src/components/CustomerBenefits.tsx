import { FiTruck } from "react-icons/fi";
import { PiPackage } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { FaPaypal } from "react-icons/fa";

const CustomerBenefits = () => {
  return (
    <section className="bg-[#F6F6F0] min-h-[20rem] flex items-center gap-6 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory">
      <div className="flex min-w-full md:min-w-[20%] flex-col items-center text-center text-brandBrown gap-4 snap-center">
        <FiTruck className="text-5xl" />
        <h2 className="text-xl font-bold">Fast & Secure Shipping</h2>
        <p className="max-w-[70%]">
          Get your Dolphin pack delivered swiftly across North America and worldwide. 
          Shipping rates are calculated at checkout.
        </p>
      </div>
      <div className="flex min-w-full md:min-w-[20%] flex-col items-center text-center text-brandBrown gap-4 snap-center">
        <PiPackage className="text-5xl" />
        <h2 className="text-xl font-bold">Effortless Pill Access</h2>
        <p className="max-w-[70%]">
          Simply close, flip, open, and pick—no spills, no hassle! 
          Designed for those with shaky hands or poor motor control.
        </p>
      </div>
      <div className="flex min-w-full md:min-w-[20%] flex-col items-center text-center text-brandBrown gap-4 snap-center">
        <TfiWorld className="text-5xl font-thin" />
        <h2 className="text-xl font-bold">Available Worldwide</h2>
        <p className="max-w-[70%]">
          Order from anywhere! We support international purchases 
          with seamless checkout and reliable global delivery.
        </p>
      </div>
      <div className="flex min-w-full md:min-w-[20%] flex-col items-center text-center text-brandBrown gap-4 snap-center">
        <FaPaypal className="text-5xl" />
        <h2 className="text-xl font-bold">Secure Payments</h2>
        <p className="max-w-[70%]">
          Pay with confidence using PayPal, ensuring a safe and easy transaction 
          whether you're in North America or overseas.
        </p>
      </div>
    </section>
  );
};

export default CustomerBenefits;
