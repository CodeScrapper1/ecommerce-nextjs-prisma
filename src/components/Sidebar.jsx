import { sidebarRoutes } from "@/utils/data";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-white to-gray-100">
      <div className="h-16 flex items-center justify-center border-b-2">
        <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
      </div>
      <ul>
        {sidebarRoutes.map((item, index) => (
          <li
            key={index}
            className="flex items-center h-16 cursor-pointer pl-6 hover:bg-gray-100"
          >
            <Link className="flex items-center space-x-4" href={item.route}>
              {item.icon}
              <span className="text-md font-medium">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
