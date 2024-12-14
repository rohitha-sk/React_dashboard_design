import { useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left: Navbar Title */}
      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      {/* Right: Dropdown */}
      <div className="relative">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 focus:outline-none hover:text-gray-300"
        >
          <FaUserCircle className="text-2xl" />
          <span>Rohitha</span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg">
            <ul className="py-2">
              {/* Profile Option */}
              <li>
                <button
                  className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                  onClick={() => alert("Go to Profile")}
                >
                  <FaUserCircle className="text-lg" />
                  <span>Profile</span>
                </button>
              </li>
              <hr className="border-gray-200 my-1" />
              {/* Logout Option */}
              <li>
                <button
                  className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                  onClick={() => alert("Logging Out")}
                >
                  <FaSignOutAlt className="text-lg" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
