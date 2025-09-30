// pages/Dashboard.jsx
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order";
import useAuthContext from "../hooks/useAuthContext";

export default function Dashboard() {
  const {user} = useAuthContext()
  return (
    <div>
      <main className="p-6">
        {/* Dashboard Stats */}
          <StatCard/>
        {/* Recent Orders Table */}
        {!user?.is_staff && (
          <Order />)}
      </main>
    </div>
  );
}
