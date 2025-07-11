import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputField from "../InputField";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButton from "../PaypalButton";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to get the quantity from the URL
  const getQueryParam = (param: string) => {
    const params = new URLSearchParams(location.search);
    return params.get(param);
  };

  const handlePostSubmit = async () => {
    setIsSubmissionLoading(true);
  
  
    const orderDetailsHtml = `
    <h2>New Order Received!</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phoneNumber}</p>
    <p><strong>Address:</strong> ${address}, ${extraAddress}, ${city}, ${state}</p>
    <hr>
    <h3>Product Details</h3>
    <p><strong>Product:</strong> ${product.name}</p>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Total:</strong> $${(product.price * quantity).toFixed(2)}</p>
    <hr>
    <p>This is an automated order confirmation email. Please process the order accordingly.</p>
  `;
  
  const recipients = 'djam4343@gmail.com, Md007m@gmail.com';
  
  fetch('http://mindthatseekstruth.com/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipient: recipients,
      subject: 'New Order Received!',
      content: orderDetailsHtml,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Email sent:', data);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  
    setIsSubmissionLoading(false);
  };
  

  const [quantity, setQuantity] = useState<number>(1); // Default to 1

  useEffect(() => {
    const qty = parseInt(getQueryParam("quantity") || "1", 10);
    if (!isNaN(qty) && qty > 0) {
      setQuantity(qty);
    }
  }, [location.search]);

  // Form States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmissionLoading, setIsSubmissionLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [country, setCountry] = useState("");

  // Dummy Product Data
  const product = {
    id: "12345",
    name: "PillCatcher (pack of 10)",
    price: 9.99,
    image: "/IMG-20250310-WA0176.jpg",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsSubmissionLoading(true);
    // setShowOverlay(true);
    toast.success("Your order has been placed!");
    handlePostSubmit();

    // Simulate a delay
    // setTimeout(() => {
    //   navigate(
    //     `/thankyou`
    //   );
    //   setIsSubmissionLoading(false);
    // }, 1000);
  };

  return (

    <main className="pt-20">
      <header className="py-8 text-center bg-white border-b-4">
        <h1 className="text-4xl">PILL CATCHER</h1>
      </header>
      <main className="w-full bg-[#F9FAFB] py-10 flex md:flex-row flex-col-reverse">
        {/* Left Section - Checkout Form */}
        <section className="md:w-1/2 px-8 w-full">
          <h3 className="text-xl text-left my-9">Contact Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="border-b pb-8 gap-4 flex md:flex-row flex-col">
              <InputField
                inputName="Email"
                valueReturner={setEmail}
                inputValue={email}
                requiredInput
              />
              <InputField
                inputName="Phone Number"
                valueReturner={setPhoneNumber}
                inputValue={phoneNumber}
              />
            </div>

            <div className="flex flex-col gap-4 border-b pb-8">
              <h3 className="text-xl text-left my-5">Shipping Information</h3>
              <InputField
                inputName="First Name"
                valueReturner={setFirstName}
                inputValue={firstName}
                requiredInput
              />
              <InputField
                inputName="Last Name"
                valueReturner={setLastName}
                inputValue={lastName}
                requiredInput
              />
              <InputField
                inputName="Street Address"
                valueReturner={setAddress}
                inputValue={address}
                requiredInput
              />
              <InputField
                inputName="Apartment, Suite, etc."
                valueReturner={setExtraAddress}
                inputValue={extraAddress}
              />
              <InputField
                inputName="City"
                valueReturner={setCity}
                inputValue={city}
                requiredInput
              />
              <InputField
                inputName="State"
                valueReturner={setState}
                inputValue={state}
              />
              <InputField
                inputName="Country"
                valueReturner={setCountry}
                inputValue={country}
              />
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black py-3 rounded-xl text-white text-lg flex items-center justify-center gap-2 my-3"
              disabled={isSubmissionLoading}
            >
              {isSubmissionLoading ? "Processing..." : "Confirm Order"}
              <MdOutlineKeyboardArrowRight className="transition-all duration-200" />
            </button>
          </form>
        </section>

        {/* Right Section - Order Summary */}
        <section className="md:w-1/2 w-full px-8 md:sticky top-4">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl mb-4">Order Summary</h3>
            <div className="flex justify-between items-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded"
              />
              <span>{product.name}</span>
              <span>Qty: {quantity}</span>
              <span>$ {product.price * quantity}</span>
            </div>
          </div>
        </section>
      </main>
      {showOverlay && (
 <section className="w-screen h-screen fixed inset-0 z-20  bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 flex items-center justify-center">
 <div className="md:w-1/2 w-full p-4">
   <PayPalButton
     items={[{ name: product.name, unit_amount: { value: product.price.toString() }, quantity }]}
     totalAmount={(product.price * quantity).toFixed(2)}
     onSuccess={()=>{handlePostSubmit()}}
   />
 </div>
</section>
        )}
    </main>
)};

export default CheckoutPage;
