import { useEffect, useState } from "react";
import DashboardCard from "../components/Dashboard/DashboardCard";
import RecentInvoices from "../components/Dashboard/RecentInvoices";
import LowStockTable from "../components/Dashboard/LowStockTable";
import { getDashboardSummary } from "../services/dashboardService";

export default function Dashboard() {

    const [summary, setSummary] = useState({
        totalProducts: 0,
        totalCustomers: 0,
        totalInvoices: 0,
        totalRevenue: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    async function loadDashboard() {

        try {
    
            const response = await getDashboardSummary();
    
            setSummary(response.data);
    
        } catch (error) {
    
            console.error("Failed to load dashboard", error);
    
        }
    
    }

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            {/* Summary Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <DashboardCard
                    title="Products"
                    value={summary.totalProducts}
                    icon="📦"
                    color="bg-blue-600"
                />

                <DashboardCard
                    title="Customers"
                    value={summary.totalCustomers}
                    icon="👥"
                    color="bg-green-600"
                />

                <DashboardCard
                    title="Invoices"
                    value={summary.totalInvoices}
                    icon="🧾"
                    color="bg-yellow-500"
                />

                <DashboardCard
                    title="Revenue"
                    value={`Rs. ${Number(summary.totalRevenue).toLocaleString()}`}
                    icon="💰"
                    color="bg-red-500"
                />

            </div>

            {/* Bottom Widgets */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <RecentInvoices />

                <LowStockTable />

            </div>

        </div>

    );

}