import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-6">

          <Outlet />

        </main>

      </div>
    </>
  );
};

export default MainLayout;