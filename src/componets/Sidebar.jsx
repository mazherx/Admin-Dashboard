import { BarChart2, ShoppingBag, Users, DollarSign, ShoppingCart, TrendingUp, Settings, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion"; // Removed AnimatePresence import for optimization
import { Link } from 'react-router-dom';
import tailwindConfig from "../../tailwind.config";

const SIDEBAR_ITEMS = [
	{ name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
	// Sidebar starts closed by default
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<motion.div
			className={`relative z-10 flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<div className='h-full bg-white bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-border-color'>
				{/* Toggle button */}
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-hover-color transition-colors max-w-fit fill-current text-black'
				>
					<Menu size={24} />
				</motion.button>

				{/* Sidebar navigation */}
				<nav className='mt-8 flex-grow text-custom-gray ' >
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<div className='flex  items-center p-4 text-sm font-medium rounded-lg hover:bg-hover-color hover:text-white transition-colors mb-2'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								{/* Sidebar text that shows only when sidebar is open */}
								{isSidebarOpen && (
									<motion.span
										className='ml-4 whitespace-nowrap'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										{item.name}
									</motion.span>
								)}
							</div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};

export default Sidebar;
