import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* Add footer or other common elements here */}
    </div>
  );
};

export default Layout;
