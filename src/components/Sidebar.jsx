import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaCog, FaQuestionCircle, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
    { name: "Help", icon: <FaQuestionCircle />, path: "/help" },
    { name: "Users", icon: <FaUsers />, path: "/users" },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">ABC pvt ltd</h2>
      <div className="mt-10">
        <ul>
          {menuItems.map((item, index) => (
            <div key={item.name}>
              {/* Top horizontal line */}
              <hr className="border-gray-700" />
              
              {/* Menu item */}
              <li className="mb-2">
                <Link
                  to={item.path}
                  className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-700 hover:text-gray-100 transition-colors duration-300"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
              
              {/* Bottom horizontal line */}
              <hr className="border-gray-700" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
