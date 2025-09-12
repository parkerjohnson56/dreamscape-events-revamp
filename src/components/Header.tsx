'use client';

import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBookingModal } = useModal();
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#packages', label: 'Packages' },
    { href: '#booking', label: 'Booking' },
    { href: '#game', label: 'Game' },
  ];

  return (
    <header className="bg-dark-800 dark:bg-dark-900 text-center py-4 relative z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-pacifico text-4xl sm:text-5xl text-primary-500 dark:text-primary-300 mb-4">
          Dreamscape Events
        </h1>
        
        <nav className="flex justify-center items-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-24">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-italiana text-xl font-semibold text-white dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={openBookingModal}
            className="hidden md:block ml-12 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 text-white px-8 py-3 rounded-full font-semibold shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105"
          >
            Get a Quote Today
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20"
            aria-label="Toggle theme"
            title={`Current theme: ${isDarkMode ? 'Dark' : 'Light'}`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block font-italiana text-xl font-semibold text-white dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center space-y-4">
              <button
                onClick={() => {
                  openBookingModal();
                  setIsMenuOpen(false);
                }}
                className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 text-white px-8 py-3 rounded-full font-semibold shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105"
              >
                Get a Quote Today
              </button>
              
              {/* Mobile Theme Toggle */}
              <div className="flex justify-center">
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20"
                  aria-label="Toggle theme"
                  title={`Current theme: ${isDarkMode ? 'Dark' : 'Light'}`}
                >
                  {isDarkMode ? (
                    <Sun className="w-6 h-6 text-white" />
                  ) : (
                    <Moon className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
