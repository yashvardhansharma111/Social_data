import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Activity, Info, Github } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/workflow", icon: Activity, label: "Workflow" },
    { path: "/about", icon: Info, label: "About" },
  ];

  return (
    <nav className="bg-[#111827] border-b border-blue-900/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400 flex items-center gap-2"
        >
          <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Social Analytics
          </span>
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center gap-4">
          {/* Links */}
          <ul className="hidden md:flex space-x-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <li key={path}>
                <Link to={path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        isActive(path)
                          ? "bg-blue-600 text-white"
                          : "text-blue-300 hover:bg-blue-800 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {label}
                    </button>
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>

          {/* GitHub Icon */}
          <a
            href="https://github.com/yourusername/social-media-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden flex items-center">
            <button
              className="text-blue-300 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden px-4 py-2 bg-[#111827]">
        <ul className="space-y-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <li key={path}>
              <Link to={path}>
                <button
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium w-full ${
                    isActive(path)
                      ? "bg-blue-600 text-white"
                      : "text-blue-300 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
