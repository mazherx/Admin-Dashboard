import React from 'react'
import { motion } from "framer-motion";

import Header from '../componets/Common/Header';
import StatCard from '../componets/Common/StatCard';
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import DailyOrders from '../componets/orders/DailyOrders';
import OrderDistribution from '../componets/orders/OrderDistribution';
import OrdersTable from '../componets/orders/OrdersTable';


const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};

const OrdersPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto text-custom-gray'>
      <Header title={"Orders"} />

      <main className='mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#4880FF' />
					<StatCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#4880FF' />
					<StatCard
						name='Completed Orders'
						icon={CheckCircle}
						value={orderStats.completedOrders}
						color='#4880FF'
					/>
					<StatCard name='Total Revenue' icon={DollarSign} value={orderStats.totalRevenue} color='#4880FF' />
				</motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />

        </main>
    </div>
  )
}

export default OrdersPage
