// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'APIs', path: '/apis', hasDropdown: true },
    { name: 'Technology', path: '/technology', hasDropdown: true },
    { name: 'Solutions', path: '/solutions', hasDropdown: true },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Docs', path: '/docs' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              HealthPlate AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link to={link.path} className="text-gray-700 hover:text-gray-900">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900">
              Get Started
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity">
              API Docs
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-2 text-gray-700 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <button className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Get Started
                </button>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg">
                  API Docs
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;