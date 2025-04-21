import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Do lost pills pose a danger to small children or pets?",
  "Do you have trouble getting exactly the number of pills you need out of pill bottles?",
  "Do your hands shake, or do you have other motor difficulties?",
  "Do you often need to take medication when you have dirty hands, such as during work or gardening?",
];

const ProductShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop&q=80"
              alt="PillCatcher Product"
              className="rounded-2xl shadow-xl"
            />
          </motion.div> */}

          <motion.div
          ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ask yourself these questions:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="text-blue-600 w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
              <h3>
              If you answered yes to any of these questions, then the Dolphin can help you. 
              </h3>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;