import React from "react";
import Header from "../componets/Common/Header";
import { motion } from "framer-motion";
import StatCard from "../componets/Common/StatCard";
import { BarChart2, ShoppingBag, User, Zap } from "lucide-react";
import SalesOverviewChart from "../componets/overview/SalesOverviewChart";
import CategoryDistributionChart from "../componets/overview/CategoryDistributionChart";
import CategroyChannelChart from "../componets/overview/CategroyChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 text-custom-gray ">
      <Header title="Overview" />
      <main className="mx-auto py-6 px-2 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-7 sm-grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#4880FF"
          />
          <StatCard name="New Users" icon={User} value="567" color="#4880FF" />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#4880FF"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="567"
            color="#4880FF"
          />
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <CategroyChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
