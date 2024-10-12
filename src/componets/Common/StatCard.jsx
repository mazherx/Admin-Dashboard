import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-100 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-border-color "
      whileHover={{ y: -5, boxShadow: " 0 10px 40px -12px rgba(0,0,0,0.5)" }}
    >
      <div className="px-2 py-3 sm:p-6">
        <span className="flex items-center text-sm font-semibold ">
          <Icon size={20} className="mr-2" style={{ color }} />
            {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-100"></p>
      </div>
    </motion.div>
  );
};

export default StatCard;
