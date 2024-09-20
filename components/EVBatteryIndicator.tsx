import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EVBatteryIndicator = () => {
  const [isCharging, setIsCharging] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.div 
        className="w-64 h-32 bg-gray-300 rounded-lg border-4 border-gray-400 relative overflow-hidden"
        animate={{ borderColor: isCharging ? "#4CAF50" : "#9e9e9e" }}
      >
        <motion.div 
          className="absolute left-0 top-0 bottom-0 bg-green-500"
          initial={{ width: "30%" }}
          animate={{ width: isCharging ? "100%" : "30%" }}
          transition={{ duration: 10, ease: "linear" }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-16 bg-gray-400 rounded-r-md" />
      </motion.div>
      <motion.button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCharging(!isCharging)}
      >
        {isCharging ? "Stop Charging" : "Start Charging"}
      </motion.button>
      <p className="mt-4 text-lg text-gray-600">
        {isCharging ? "Charging in progress..." : "EV ready for charging"}
      </p>
    </div>
  );
};

export default EVBatteryIndicator;