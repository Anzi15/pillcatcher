 // Adjust import path as needed
import ProductPageUi from "../components/ProductPageUi";
import CustomerBenefits from "../components/CustomerBenefits";
import Footer from "./Footer";

export default function BuyNow() {

  return (
    <>
      <main className="flex justify-evenly w-full md:flex-row flex-col relative h-full pt-20">
        <div className="md:max-h-[565px] md:max-w-[445px]">
          <img className="w-full rounded-md" src="https://i.ibb.co/Fqs8Cv0X/sdfgsdf.png" alt="" />
        </div>
        <ProductPageUi />
      </main>

      <div className="description px-8 md:py-[8rem] py-[5rem]">
        <h3 className="text-left">
          <b>Description</b>
        </h3>
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-left">The Dolphin – Effortless Pill Access with a Simple Flip</h1>
      
      <p className="text-lg text-gray-700 text-left">
        <strong>Just Close, Flip, Open, and Pick – It’s That Easy!</strong>
      </p>
      
      <p className="text-gray-600 text-left">
        The Dolphin makes taking your pills effortless. A quick flip and shake brings the pills to the top, ready for easy access. 
        Perfect for those with shaky hands, arthritis, or limited motor control.
      </p>

      <div className="text-left text-gray-600 mt-8">
        <p>✅ Easy pill access in seconds</p>
        <p>✅ No more struggling with small pill bottles</p>
        <p>✅ Ideal for seniors and individuals with motor difficulties</p>
        <p>✅ Affordable and convenient</p>
      </div>

      <p className="text-left text-gray-700 mt-6">
        Thank you for your interest in The Dolphin! We are excited to offer you a simple solution to make your daily pill routine easier and more convenient.
      </p>
    </div>

      </div>

      <div className="relative w-full overflow-hidden flex items-center justify-center aspect-video flex-col p-8 gap-4 md:min-h-fit min-h-[20rem] bg-black">
  <div 
    className="absolute inset-0 bg-black opacity-50"
    style={{
      backgroundImage: "url('https://i.ibb.co/S4ZXg8PM/akdesjhf.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <h1 className="z-[2] md:text-5xl text-3xl text-white font-bold font-serif relative">
    Just Close, Flip, Open, and Pick!
  </h1>
</div>



      <CustomerBenefits />
    <Footer/>
    </>
  );
}
