import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import React from "react";

const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className="bg-white custom-gray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-border-color"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-bold mb-4 text-custom-gray ">
        Category Distribution
      </h2>
      <div className="h-80 text-chart-color">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884D8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
              
            </Pie>

            <Tooltip
              contentStyle={{
								backgroundColor: "rgba(0, 0, 0, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#4880FF" }}
            />

            <legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
