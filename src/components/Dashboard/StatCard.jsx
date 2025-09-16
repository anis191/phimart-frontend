import { FiPackage, FiShoppingCart, FiUsers, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import useStateDataContext from "../../hooks/useStateDataContext";

export default function StatCard() {
  const { total_products, total_orders, total_users } = useStateDataContext();

  const stats = [
    { icon: FiPackage, label: "Total Products", value: total_products, color: "text-blue-500", bg: "bg-blue-100" },
    { icon: FiShoppingCart, label: "Total Orders", value: total_orders, color: "text-green-500", bg: "bg-green-100" },
    { icon: FiUsers, label: "Total Users", value: total_users, color: "text-purple-500", bg: "bg-purple-100" },
    { icon: FiStar, label: "Average Rating", value: "4.8", color: "text-yellow-500", bg: "bg-yellow-100" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card bg-base-100 shadow-lg border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="card-body p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">{item.label}</p>
                  <p className="text-3xl font-bold text-gray-800">{item.value}</p>
                </div>
                <div className={`p-3 rounded-full ${item.bg}`}>
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>
              </div>
              <div className="mt-2">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div className={`h-1 rounded-full ${item.bg.replace("bg-", "bg-").replace("100", "500")}`} style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
