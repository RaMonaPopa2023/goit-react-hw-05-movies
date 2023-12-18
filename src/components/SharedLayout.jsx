import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/common/components/Sidebar/Sidebar.jsx';

const SharedLayout = () => {
  return (
    <main className="App">
      <Sidebar />
      <section className="container">
        <Outlet />
      </section>
    </main>
  );
};

export default SharedLayout;
