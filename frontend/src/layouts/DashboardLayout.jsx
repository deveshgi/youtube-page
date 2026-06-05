import DashboardSidebar from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <DashboardSidebar />

      <Outlet />
    </>
  );
}

export default DashboardLayout;