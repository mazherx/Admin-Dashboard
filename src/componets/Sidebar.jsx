import {
  BarChart2,
  ShoppingBag,
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Settings,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, href: "/" },
  { name: "Products", icon: ShoppingBag, href: "/products" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Sales", icon: DollarSign, href: "/sales" },
  { name: "Orders", icon: ShoppingCart, href: "/orders" },
  { name: "Analytics", icon: TrendingUp, href: "/analytics" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.div
      className={`relative z-10 flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="h-full bg-white p-4 flex flex-col border-r border-border-color">
        {/* Toggle button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-hover-color transition-colors max-w-fit group"
        >
          <Menu
            size={24}
            className="text-black transition-colors group-hover:text-white"
          />
        </motion.button>

        {/* Sidebar navigation */}
        <nav className="mt-8 flex-grow text-custom-gray">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              {/* Apply hover effect to entire div, including icon and text */}
              <div className="font-semibold flex items-center p-4 text-sm  rounded-lg hover:bg-hover-color hover:text-white transition-colors mb-2 group">
                {/* Icon color change */}
                <item.icon
                  size={20}
                  className="text-[#4880FF] transition-colors duration-200 group-hover:text-white"
                />
                {/* Sidebar text that shows only when sidebar is open */}
                {isSidebarOpen && (
                  <motion.span
                    className="ml-4 whitespace-nowrap transition-colors duration-200 group-hover:text-white"
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
