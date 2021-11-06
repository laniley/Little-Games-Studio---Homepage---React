import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;