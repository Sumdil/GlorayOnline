import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Contact', href: '#contact' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
];

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">StyleStore</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};