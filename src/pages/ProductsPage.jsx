import React from 'react';
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Header from '../componets/Common/Header';
import StatCard from '../componets/Common/StatCard';
import ProductTable from '../componets/product/ProductTable';
import CategoryDistributionChart from '../componets/overview/CategoryDistributionChart';
import SalesTrendChart from '../componets/product/SalesTrendChart';

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative text-custom-gray'>
      <Header title='Products' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name='Total Products' icon={Package} value={1234} color='#4880FF' />
          <StatCard name='Top Selling' icon={TrendingUp} value={89} color='#4880FF' />
          <StatCard name='Low Stock' icon={AlertTriangle} value={23} color='#4880FF' />
          <StatCard name='Total Revenue' icon={DollarSign} value={"$543,210"} color='#4880FF' />
        </motion.div>

        <ProductTable />

        {/* Charts */}
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>

      </main> {/* Closing the main tag */}
    </div>
  );
}

export default ProductsPage;
