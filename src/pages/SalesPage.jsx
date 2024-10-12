import { motion } from "framer-motion";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import Header from "../componets/Common/Header";
import StatCard from "../componets/Common/StatCard";
import SalesOverviewChart from "../componets/overview/SalesOverviewChart";
import SalesByCategoryChart from "../componets/sales/SalesByCategoryChart";
import DailySalesTrend from "../componets/sales/DailySalesTrend";


const salesStats = {
	totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

const SalesPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 text-custom-gray'>
			<Header title='Sales Dashboard' />

			<main className='mx-auto py-6 px-4 lg:px-8'>
				{/* SALES STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Revenue' icon={DollarSign} value={salesStats.totalRevenue} color='#4880FF' />
					<StatCard
						name='Avg. Order Value'
						icon={ShoppingCart}
						value={salesStats.averageOrderValue}
						color='#4880FF'
					/>
					<StatCard
						name='Conversion Rate'
						icon={TrendingUp}
						value={salesStats.conversionRate}
						color='#4880FF'
					/>
					<StatCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#4880FF' />
				</motion.div>

                <SalesOverviewChart />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-6#4880FF'>
					<SalesByCategoryChart />
					<DailySalesTrend />
				</div>
        </main>
    </div>
  )
}

export default SalesPage
