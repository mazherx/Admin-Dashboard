import React from 'react'
import Header from '../componets/Common/Header'
import OverviewCards from '../componets/analytics/OverviewCards';
import RevenueChart from '../componets/analytics/RevenueChart';
import ChannelPerformance from '../componets/analytics/ChannelPerformance';
import ProductPerformance from '../componets/analytics/ProductPerformance';
import UserRetention from '../componets/analytics/UserRetention';
import CustomerSegmentation from '../componets/analytics/CustomerSegmentation';




const AnalyticsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-background-color text-custom-gray'>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards />
                <RevenueChart />
			</main>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8 px-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
			</div>
		</div>
	);
};
export default AnalyticsPage;
