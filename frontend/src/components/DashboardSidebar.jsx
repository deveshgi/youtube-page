import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="w-64 h-screen border-r p-5">

      <div className="space-y-4">

        <Link to="/dashboard">
          Overview
        </Link>

        <Link to="/dashboard/videos">
          Videos
        </Link>

        <Link to="/dashboard/comments">
          Comments
        </Link>

        <Link to="/dashboard/analytics">
          Analytics
        </Link>

      </div>

    </aside>
  );
};

export default DashboardSidebar;