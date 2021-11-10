import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

function Layout() {
    return (
        <div className="main-content">
            <Outlet />
        </div>
    );
}

export default Layout;