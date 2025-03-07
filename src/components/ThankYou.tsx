import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto" />
        </motion.div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Thank You for Your Order!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your order has been successfully placed. You will receive a confirmation email shortly.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Return to Home
        </motion.button>
      </div>
    </div>
  );
};

export default ThankYou;