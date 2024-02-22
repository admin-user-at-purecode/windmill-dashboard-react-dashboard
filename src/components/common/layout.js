import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

const Layout = ({ children }) => {
  return (
    <Windmill usePreferences>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4">
            {children}
          </div>
        </div>
      </div>
    </Windmill>
  );
};

export default Layout;
