import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 p-8 bg-slate-100 min-h-screen">
        <Outlet />
      </main>

    </div>
  );
}