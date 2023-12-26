import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/common/components/Sidebar/Sidebar.jsx';

const SharedLayout = () => {
  return (
    <main className="App">
      <Sidebar />
      <section className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default SharedLayout;
