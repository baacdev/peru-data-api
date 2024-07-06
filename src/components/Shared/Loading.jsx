import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => (
  <motion.div
    className="h-20 w-20 border-8 border-t-8 border-t-indigo-500 border-indigo-300 rounded-full"
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 1,
      ease: "linear",
    }}
  />
);

export default Loading;
