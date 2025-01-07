import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Activity, Info, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/workflow', icon: Activity, label: 'Workflow' },
    { path: '/about', icon: Info, label: 'About' },
  ];

  return (
    <nav className="bg-[#111827] border-b border-blue-900/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400 flex items-center gap-2">
          <Activity className="w-6 h-6" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Social Analytics
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex space-x-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <li key={path}>
                <Link to={path}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        isActive(path)
                          ? 'bg-blue-600 text-white'
                          : 'text-blue-300 hover:bg-blue-800 hover:text-white'
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
          <a
            href="https://github.com/yourusername/social-media-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

