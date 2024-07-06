import React from 'react';
import { motion } from 'framer-motion';

const WaitingForQuery = () => (
  <div className="flex items-center justify-center space-x-2">
    <a className='text-gray-400 text-xl lg:text-xl font-bold block'>Esperando consulta</a>
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        className="w-4 h-4 bg-indigo-100 rounded-full"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.3,
          delay: index * 0.2,
        }}
      />
    ))}
  </div>
);

export default WaitingForQuery;
