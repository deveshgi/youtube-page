import {
  Home,
  User,
  History,
  LayoutDashboard,
  ListVideo
} from "lucide-react";

import { Link } from "react-router-dom";

const Sidebar = () => {

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={20} />
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />
    },
    {
      name: "History",
      path: "/history",
      icon: <History size={20} />
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />
    },
    {
      name: "Playlists",
      path: "/playlists",
      icon: <ListVideo size={20} />
    }
  ];

  return (
    <aside className="w-60 h-screen border-r p-4">

      <div className="space-y-4">

        {links.map(link => (
          <Link
            key={link.name}
            to={link.path}
            className="flex gap-3 items-center hover:bg-gray-100 p-3 rounded-lg"
          >
            {link.icon}
            {link.name}
          </Link>
        ))}

      </div>

    </aside>
  );
};

export default Sidebar;