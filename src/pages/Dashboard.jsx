// pages/Dashboard.jsx
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order";

export default function Dashboard() {
  return (
    <div>
      <main className="p-6">
        {/* Dashboard Stats */}
          <StatCard/>
        {/* Recent Orders Table */}
          <Order />
      </main>
    </div>
  );
}
