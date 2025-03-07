'use client';
import React, { useState } from 'react';

const FaqsSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const faqs = [
    {
      question: 'What is PillCatcher?',
      answer: 'PillCatcher is a patented device designed to provide a quick and simple way to dispose of unused pills and liquid medicines, ensuring safe and environmentally friendly disposal.',
    },
    {
      question: 'How does PillCatcher work?',
      answer: 'PillCatcher allows users to securely dispose of unused medications by providing a safe containment system, preventing potential misuse and environmental contamination.',
    },
    {
      question: 'Where can I purchase PillCatcher?',
      answer: 'You can purchase PillCatcher directly from our official website. Simply add the product to your cart and proceed to checkout.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Currently, we offer shipping within the United States. For international shipping options, please contact our customer service team for more information.',
    },
    {
      question: 'What is your return policy?',
      answer: 'If you are not satisfied with our product, please contact us to discuss replacement or refund options. All sales are final, and shipping costs are not included in the refund.',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/3">
            <img
              src="https://i.ibb.co/TzB7Cx1/bottle-of-medice.png"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="skeleton-loading max-h-[80vw] aspect-[9/16] w-full rounded-xl select-none object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6 className="text-lg text-center font-medium text-brandRed mb-2 lg:text-left">
                  FAQs
                </h6>
                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                  Looking for answers?
                </h2>
              </div>
              <div className="accordion-group text-left">
                {faqs.map((item, index) => (
                  <div
                    key={index}
                    className={`accordion py-8 border-b border-solid border-gray-200 ${activeAccordion === index ? 'active' : ''}`}
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between md:text-xl text-lg font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-brandRed accordion-active:text-indigo-600 accordion-active:font-medium focus-within::text-brandRed"
                      onClick={() => toggleAccordion(index)}
                      aria-controls={`accordion-content-${index}`}
                    >
                      <h5>{item.question}</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-brandRed accordion-active:text-indigo-600 ${activeAccordion === index ? 'rotate-180' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id={`accordion-content-${index}`}
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeAccordion === index ? 'max-h-40' : 'max-h-0'}`}
                      aria-labelledby={`accordion-heading-${index}`}
                    >
                      <p className="text-base text-gray-500 font-normal">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
