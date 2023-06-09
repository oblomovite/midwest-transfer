import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <p className="text-white font-bold text-xl">Midwest Transfer</p>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
