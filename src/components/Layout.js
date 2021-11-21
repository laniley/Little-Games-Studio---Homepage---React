import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

import ReactFBLike from 'react-fb-like';

function Layout() {
    return (
        <div className="main-content">
            <ReactFBLike language="en_US" appId="" version="v2.12" href="https://www.facebook.com/LittleGamesStudio" />
            <Outlet />
        </div>
    );
}

export default Layout;