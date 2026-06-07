import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardSidebar from "../components/DashboardSidebar";

function ProfileLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProfileLayout;