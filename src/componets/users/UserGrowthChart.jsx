import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];

const UserGrowthChart = () => {
	return (
		<motion.div
			className='bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-border-color'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-bold text-custom-gray mb-4'>User Growth</h2>
			<div className='h-[320px] text-chart-color'>
				<ResponsiveContainer width='100%' height='100%' >
					<LineChart data={userGrowthData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(0, 0, 0, 0.8)",
								
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='users'
							stroke='#4880FF'
							strokeWidth={2}
							dot={{ fill: "#4880FF", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserGrowthChart;