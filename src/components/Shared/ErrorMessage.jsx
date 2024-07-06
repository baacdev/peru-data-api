import React from 'react';
import { motion } from 'framer-motion';

const ErrorMessage = ({ error }) => (
  <div className='text-center lg:text-xl font-bold'>
    <a className='text-red-400'>Error ⚠️</a>
    <motion.div
      className="flex items-center justify-center bg-red-400 text-red-900 px-3 py-3 rounded-lg relative"
      role="alert"
      initial={{ x: 0 }}
      animate={{
        x: [0, -10, 10, -10, 10, -10, 10, -10, 0],
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <span className="block sm:inline">{error}</span>
    </motion.div>
  </div>
);

export default ErrorMessage;
