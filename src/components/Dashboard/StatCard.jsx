import { useEffect, useState } from "react";
import { FiPackage, FiShoppingCart, FiUsers, FiStar } from "react-icons/fi";
import { FaDollarSign, FaMoneyCheckAlt, FaClipboardList } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import useAuthContext from "../../hooks/useAuthContext";
import useStateDataContext from "../../hooks/useStateDataContext";

export default function StatCard() {
  const { user } = useAuthContext();
  const [expanded, setExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const {
    total_categories = 0,
    total_products = 0,
    total_orders = 0,
    total_users = 0,
    total_reviews = 0,
    products_trend,
    orders_trend,
    users_trend,
    revenue_trend,
    total_revenue = 0,
    total_payments = 0,
    pending_payments = 0,
    refunds = 0,
    your_total_purchases = 0,
    your_total_orders = 0,
    your_total_payments = 0,
  } = useStateDataContext();

  const makeTrend = (trendCandidate, total) => {
    if (Array.isArray(trendCandidate) && trendCandidate.length) {
      if (typeof trendCandidate[0] === "number") {
        return trendCandidate.map((v, i) => ({ day: `D${i + 1}`, value: v }));
      }
      return trendCandidate;
    }
    const points = 7;
    return Array.from({ length: points }, (_, i) => {
      const factor = points === 1 ? 1 : i / (points - 1);
      const value = Math.round(total * (0.5 + 0.5 * factor));
      return { day: `D${i + 1}`, value };
    });
  };

  const stats = user?.is_staff
    ? [
        {
          key: "categories",
          icon: BiCategory,
          label: "Total Categories",
          value: total_categories,
          colorClass: "text-indigo-500",
          bg: "bg-indigo-100",
          trend: makeTrend(null, total_categories),
          showGraph: true,
        },
        {
          key: "products",
          icon: FiPackage,
          label: "Total Products",
          value: total_products,
          colorClass: "text-blue-500",
          bg: "bg-blue-100",
          trend: makeTrend(products_trend, total_products),
          showGraph: true,
        },
        {
          key: "orders",
          icon: FiShoppingCart,
          label: "Total Orders",
          value: total_orders,
          colorClass: "text-green-500",
          bg: "bg-green-100",
          trend: makeTrend(orders_trend, total_orders),
          showGraph: true,
        },
        {
          key: "users",
          icon: FiUsers,
          label: "Total Users",
          value: total_users,
          colorClass: "text-purple-500",
          bg: "bg-purple-100",
          trend: makeTrend(users_trend, total_users),
          showGraph: true,
        },
        {
          key: "rating",
          icon: FiStar,
          label: "Average Rating",
          value: "4.8",
          colorClass: "text-yellow-500",
          bg: "bg-yellow-100",
          trend: makeTrend(null, 48).map((p) => ({ ...p, value: +(p.value / 10).toFixed(1) })),
          showGraph: true,
        },
        {
          key: "reviews",
          icon: FaClipboardList,
          label: "Total Reviews",
          value: total_reviews,
          colorClass: "text-pink-500",
          bg: "bg-pink-100",
          trend: makeTrend(null, total_reviews),
          showGraph: true,
        },
        {
          key: "payments",
          icon: FaDollarSign,
          label: "Total Payments",
          value: `$${total_payments}`,
          colorClass: "text-indigo-500",
          bg: "bg-indigo-100",
          trend: makeTrend(revenue_trend, total_payments),
          showGraph: true,
        },
        {
          key: "pending",
          icon: FaMoneyCheckAlt,
          label: "Pending Payments",
          value: `$${pending_payments}`,
          colorClass: "text-red-500",
          bg: "bg-red-100",
          trend: makeTrend(revenue_trend, pending_payments),
          showGraph: true,
        },
        {
          key: "refunds",
          icon: FaMoneyCheckAlt,
          label: "Total Refunds",
          value: `$${refunds}`,
          colorClass: "text-pink-500",
          bg: "bg-pink-100",
          trend: makeTrend(revenue_trend, refunds),
          showGraph: true,
        },
        {
          key: "revenue",
          icon: FaDollarSign,
          label: "Total Revenue",
          value: `$${total_revenue}`,
          colorClass: "text-green-600",
          bg: "bg-green-100",
          trend: makeTrend(revenue_trend, total_revenue),
          showGraph: true,
        },
      ]
    : [
        {
          key: "purchases",
          icon: FiPackage,
          label: "Purchase Products",
          value: your_total_purchases,
          colorClass: "text-blue-500",
          bg: "bg-blue-100",
          trend: makeTrend(null, your_total_purchases),
          showGraph: false,
        },
        {
          key: "orders",
          icon: FiShoppingCart,
          label: "Total Orders",
          value: your_total_orders,
          colorClass: "text-green-500",
          bg: "bg-green-100",
          trend: makeTrend(null, your_total_orders),
          showGraph: false,
        },
        {
          key: "payments",
          icon: FaDollarSign,
          label: "Total Payments",
          value: `$${your_total_payments}`,
          colorClass: "text-indigo-500",
          bg: "bg-indigo-100",
          trend: makeTrend(null, your_total_payments),
          showGraph: false,
        },
        {
          key: "pending",
          icon: FaMoneyCheckAlt,
          label: "Pending Payments",
          value: `$${pending_payments}`,
          colorClass: "text-red-500",
          bg: "bg-red-100",
          trend: makeTrend(null, pending_payments),
          showGraph: false,
        },
      ];

  const strokeMap = {
    "text-blue-500": "#3b82f6",
    "text-green-500": "#10b981",
    "text-purple-500": "#8b5cf6",
    "text-yellow-500": "#f59e0b",
    "text-indigo-500": "#6366f1",
    "text-red-500": "#ef4444",
    "text-pink-500": "#ec4899",
    "text-green-600": "#16a34a",
  };

  const defaultVisible = user?.is_staff ? 6 : 4;
  const visibleStats = expanded ? stats : stats.slice(0, defaultVisible);

  const computePercentChange = (arr) => {
    if (!Array.isArray(arr) || arr.length < 2) return 0;
    const first = arr[0].value;
    const last = arr[arr.length - 1].value;
    if (first === 0) return last === 0 ? 0 : 100;
    return Math.round(((last - first) / Math.abs(first)) * 100);
  };

  const safeChartData = (item) => {
    let chartData = Array.isArray(item.trend) ? item.trend : [];
    if (!chartData.length) {
      const raw = String(item.value ?? "").replace(/[^0-9.-]+/g, "");
      const base = Number(raw) || 100;
      chartData = makeTrend(null, base);
    }
    chartData = chartData.map((d, i) => ({ day: d.day ?? `D${i + 1}`, value: Number(d.value) || 0 }));
    return chartData;
  };

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6">
        {visibleStats.map((item, index) => {
          const Icon = item.icon;
          const stroke = strokeMap[item.colorClass] || "#60a5fa";

          if (item.value === undefined) return null;
          const chartData = item.showGraph ? safeChartData(item) : null;
          const showChart = item.showGraph && chartData && chartData.length >= 2 && isClient;

          const lastValue = chartData && chartData.length ? chartData[chartData.length - 1].value : null;
          const maxValue = chartData && chartData.length ? Math.max(...chartData.map((d) => d.value), 1) : 1;
          const progressPct = chartData && chartData.length ? Math.max(6, Math.min(100, Math.round((lastValue / maxValue) * 100))) : 75;
          const percentChange = computePercentChange(chartData);

          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group card bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="card-body p-4 sm:p-6 space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wide">{item.label}</p>
                    <p
                      className="text-xl sm:text-2xl font-bold text-gray-900 truncate group-hover:text-gray-950 transition-colors"
                      title={String(item.value)}
                    >
                      {item.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-xl ${item.bg}`}>
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.colorClass}`} />
                  </div>
                </div>

                {/* Stats Badge (only if graph is shown) */}
                {item.showGraph && (
                  <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-md ${percentChange >= 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                    {percentChange >= 0 ? `▲ ${percentChange}%` : `▼ ${Math.abs(percentChange)}%`} vs last period
                  </span>
                )}

                {/* Mini Chart (admin only) */}
                {showChart && (
                  <div>
                    <div className="w-full" style={{ height: 48 }}>
                      <ResponsiveContainer width="100%" height={48}>
                        <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id={`grad-${item.key}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={stroke} stopOpacity={0.18} />
                              <stop offset="70%" stopColor={stroke} stopOpacity={0.06} />
                              <stop offset="100%" stopColor={stroke} stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Tooltip formatter={(value) => [value, ""]} labelFormatter={() => ""} />
                          <Area type="monotone" dataKey="value" stroke={stroke} strokeWidth={2} fill={`url(#grad-${item.key})`} dot={false} activeDot={{ r: 4 }} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Progress & Meta Info */}
                    <div className="mt-3">
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div style={{ width: `${progressPct}%`, background: stroke }} className="h-1.5 rounded-full transition-all duration-500" />
                      </div>

                      <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
                        <span>Last: {lastValue !== null ? (String(item.value).startsWith("$") ? `$${lastValue}` : lastValue) : "-"}</span>
                        <span>Max: {maxValue}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {stats.length > defaultVisible && (
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded((s) => !s)}
            className="inline-flex items-center px-5 py-2 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow hover:shadow-md hover:bg-gray-50 transition"
          >
            {expanded ? "Show less" : `Show ${stats.length - defaultVisible} more`}
          </button>
        </div>
      )}
    </>
  );
}
